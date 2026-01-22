
import RankingSquadsPage from "../squads-page";
import { RankingDevsPageProvider } from "./context";

export default function RankingDevsPage() {
  return (
    <RankingDevsPageProvider>
      <RankingSquadsPage dev />
    </RankingDevsPageProvider>
  )
}
