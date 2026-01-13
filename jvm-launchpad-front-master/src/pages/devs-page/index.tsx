
import SquadsPage from "../squads-page";
import { SquadsDevPageProvider } from "./context";

export default function SquadsDevPage() {
  return (
    <SquadsDevPageProvider>
      <SquadsPage dev />
    </SquadsDevPageProvider>
  )
}
