import UIHeader from "@/shared/ui/Header/ui-header";
import { ToggleButton } from "@/features/blockingButton";
import { Profile } from "@/widgets/Profile";

export function HomePage() {
  return (
    <>
      <UIHeader>
        <Profile />
      </UIHeader>
      <article className="flex-1">
        <ToggleButton />
      </article>
    </>
  );
}
