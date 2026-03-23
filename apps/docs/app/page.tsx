"use client";

import React from "react";
import { 
  Button, 
  Input, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  Modal, 
  Badge, 
  Avatar, 
  AvatarImage, 
  AvatarFallback, 
  AvatarGroup,
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownCheckboxItem,
  DropdownRadioItem,
  DropdownRadioGroup,
  DropdownShortcut
} from "@repo/ui";
import { formatDate } from "@repo/utils";
import { User, Settings, LogOut, Mail, MessageSquare, PlusCircle, UserPlus } from "lucide-react";

export default function Home() {
  const [showActivity, setShowActivity] = React.useState(true);
  const [panel, setPanel] = React.useState("right");

  return (
    <div className="p-8 space-y-12 max-w-4xl mx-auto">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">Nirmit UI Library</h1>
        <p className="text-foreground/80">
          Build beautiful interfaces with our design system. Today is: {formatDate(new Date())}
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Dropdowns</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Dropdown>
            <DropdownTrigger asChild>
              <Button variant="secondary">Open Menu</Button>
            </DropdownTrigger>
            <DropdownContent>
              <DropdownLabel>My Account</DropdownLabel>
              <DropdownSeparator />
              <DropdownItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <DropdownShortcut>⇧⌘P</DropdownShortcut>
              </DropdownItem>
              <DropdownItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownShortcut>⌘S</DropdownShortcut>
              </DropdownItem>
              <DropdownSeparator />
              <DropdownLabel>Preferences</DropdownLabel>
              <DropdownCheckboxItem
                checked={showActivity}
                onCheckedChange={setShowActivity}
              >
                Show Activity Bar
              </DropdownCheckboxItem>
              <DropdownSeparator />
              <DropdownRadioGroup value={panel} onValueChange={setPanel}>
                <DropdownLabel>Panel Position</DropdownLabel>
                <DropdownRadioItem value="left">Left</DropdownRadioItem>
                <DropdownRadioItem value="right">Right</DropdownRadioItem>
              </DropdownRadioGroup>
              <DropdownSeparator />
              <DropdownItem className="text-red-500 focus:text-red-500">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownShortcut>⇧⌘Q</DropdownShortcut>
              </DropdownItem>
            </DropdownContent>
          </Dropdown>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Avatars</h2>
        <div className="flex flex-wrap items-end gap-6">
          <Avatar size="xs">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar size="xl">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Avatar Group</h3>
          <AvatarGroup limit={3} size="md">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/leerob.png" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/evilrabbit.png" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/delbaoliveira.png" />
              <AvatarFallback>DO</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Badges</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="default">Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Badge size="sm">Small Badge</Badge>
          <Badge size="md">Medium Badge</Badge>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Modals</h2>
        <div className="flex flex-wrap gap-4">
          <Modal 
            trigger={<Button>Open Small Modal</Button>}
            title="Small Modal"
            description="This is a small size variant."
            size="sm"
          >
            <div className="space-y-4">
              <p>Content goes here.</p>
              <Button className="w-full">Action</Button>
            </div>
          </Modal>

          <Modal 
            trigger={<Button variant="secondary">Open Medium Modal</Button>}
            title="Medium Modal"
            description="This is the default size variant."
            size="md"
          >
            <div className="space-y-4">
              <p>Content goes here.</p>
              <Button className="w-full">Action</Button>
            </div>
          </Modal>

          <Modal 
            trigger={<Button variant="ghost">Open Large Modal</Button>}
            title="Large Modal"
            description="This is a large size variant."
            size="lg"
          >
            <div className="space-y-4">
              <p>Content goes here.</p>
              <Button className="w-full">Action</Button>
            </div>
          </Modal>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="destructive">Destructive Button</Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button isLoading>Loading State</Button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input 
            label="Email Address" 
            placeholder="enter your email" 
            hint="We'll never share your email."
          />
          <Input 
            label="Password" 
            type="password" 
            placeholder="••••••••" 
            error="Password must be at least 8 characters."
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="default">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
            </CardHeader>
            <CardContent>
              This is a standard card with a subtle border.
            </CardContent>
          </Card>
          
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>Bordered Card</CardTitle>
            </CardHeader>
            <CardContent>
              A card with a more prominent border.
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
            </CardHeader>
            <CardContent>
              A card with a shadow effect instead of a border.
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
