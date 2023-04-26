import * as Popover from "@radix-ui/react-popover";

export default function Home() {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-2 w-full">
      <div>{`"@radix-ui/react-popover": "1.0.6-rc.5"`}</div>
      <Popover.Root>
        <Popover.Trigger className="bg-gray-500 text-white p-2">
          Popover trigger
        </Popover.Trigger>
        <Popover.Content className="bg-gray-300 p-2 flex flex-col space-y-2">
          <Popover.Arrow className="fill-gray-300" />
          <h1 className="text-xl font-bold">Popover content</h1>
          <Popover.Root>
            <Popover.Trigger className="bg-gray-800 text-white p-2">
              Nested trigger
            </Popover.Trigger>
            <Popover.Content className="bg-gray-700 text-white p-2">
              Nested popover content
              <Popover.Arrow className="fill-gray-700" />
            </Popover.Content>
          </Popover.Root>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}
