import UIHeader from "@/shared/ui/Header/ui-header";
import { ToggleButton } from "@/features/blockingButton";
import { Profile } from "@/widgets/Profile";
import { BlockItemForm, BlockList } from "@/features/blocklist";

export function HomePage() {
  return (
    <>
      <UIHeader>
        <Profile />
      </UIHeader>
      <section className="flex-1 flex justify-start items-start p-5 gap-4">
        <aside>
          <ToggleButton />
        </aside>
        <div className="flex-1 flex flex-col gap-8">
          <BlockItemForm />
          <BlockList />
        </div>
      </section>
    </>
  );
}
