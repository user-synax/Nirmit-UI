"use client";

import { cn } from "@repo/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, forwardRef, HTMLAttributes, useMemo } from "react";

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function isSameDay(d1: Date, d2: Date) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

function isToday(date: Date) {
  return isSameDay(date, new Date());
}

export interface CalendarOnlyProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  value?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  showOutsideDays?: boolean;
}

export const CalendarOnly = forwardRef<HTMLDivElement, CalendarOnlyProps>(
  (
    {
      value,
      onChange,
      minDate,
      maxDate,
      disabled,
      showOutsideDays = true,
      className,
      ...props
    },
    ref,
  ) => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(
      value?.getMonth() ?? today.getMonth(),
    );
    const [currentYear, setCurrentYear] = useState(
      value?.getFullYear() ?? today.getFullYear(),
    );

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const daysInPrevMonth = getDaysInMonth(
      currentMonth === 0 ? currentYear - 1 : currentYear,
      currentMonth === 0 ? 11 : currentMonth - 1,
    );

    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

    const isDisabled = (date: Date) => {
      if (disabled) return true;
      if (minDate && date < minDate) return true;
      if (maxDate && date > maxDate) return true;
      return false;
    };

    const calendarDays = useMemo(() => {
      const days: { date: Date; isCurrentMonth: boolean }[] = [];

      for (let i = firstDay - 1; i >= 0; i--) {
        const date = new Date(prevYear, prevMonth, daysInPrevMonth - i);
        days.push({ date, isCurrentMonth: false });
      }

      for (let i = 1; i <= daysInMonth; i++) {
        days.push({
          date: new Date(currentYear, currentMonth, i),
          isCurrentMonth: true,
        });
      }

      const remaining = 42 - days.length;
      for (let i = 1; i <= remaining; i++) {
        const date = new Date(nextYear, nextMonth, i);
        days.push({ date, isCurrentMonth: false });
      }

      return days;
    }, [
      currentMonth,
      currentYear,
      daysInMonth,
      firstDay,
      prevMonth,
      prevYear,
      nextMonth,
      nextYear,
      daysInPrevMonth,
    ]);

    const goToPrevMonth = () => {
      setCurrentMonth(prevMonth);
      setCurrentYear(prevYear);
    };

    const goToNextMonth = () => {
      setCurrentMonth(nextMonth);
      setCurrentYear(nextYear);
    };

    return (
      <div ref={ref} className={cn("w-64", className)} {...props}>
        <div className="flex items-center justify-between mb-3 px-1">
          <button
            onClick={goToPrevMonth}
            className="flex h-7 w-7 items-center justify-center rounded-md text-muted hover:bg-surface hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-sm font-medium text-foreground">
            {MONTHS[currentMonth]} {currentYear}
          </span>
          <button
            onClick={goToNextMonth}
            className="flex h-7 w-7 items-center justify-center rounded-md text-muted hover:bg-surface hover:text-foreground transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-0.5 text-center">
          {DAYS.map((day) => (
            <div
              key={day}
              className="py-1 text-xs font-medium text-muted-foreground"
            >
              {day}
            </div>
          ))}

          {calendarDays.map((day, idx) => {
            const isSelected = value ? isSameDay(day.date, value) : false;
            const isDayToday = isToday(day.date);
            const dayDisabled = isDisabled(day.date);

            return (
              <button
                key={idx}
                onClick={() => !dayDisabled && onChange?.(day.date)}
                disabled={dayDisabled}
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-md text-sm transition-all duration-fast mx-auto my-0.5",
                  !day.isCurrentMonth && showOutsideDays
                    ? "text-muted-foreground/50"
                    : !day.isCurrentMonth && !showOutsideDays
                      ? "invisible"
                      : "text-foreground",
                  isSelected &&
                    "bg-primary text-background hover:bg-primary-hover",
                  isDayToday &&
                    !isSelected &&
                    "border border-primary text-primary",
                  dayDisabled && "opacity-30 cursor-not-allowed",
                  !isSelected && !dayDisabled && "hover:bg-surface-hover",
                )}
              >
                {day.date.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  },
);

CalendarOnly.displayName = "CalendarOnly";
