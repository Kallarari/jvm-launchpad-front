import { useMemo } from 'react';
import type { Squad } from '../../../infrastructure/types';
import Header from '../components/header';
import SubHeader from '../components/sub-header';
import { RankingSquadsPageProvider } from './context';
import { useImageExists } from './hook';
import type { PodiumPositionType, SquadsPageContentProps } from './interface';
import { useRankingSquadsPageContext } from './mock';
import * as S from './styles.module';

export const RankingPageContent = ({ dev = false }: SquadsPageContentProps) => {
  const { data, isLoading } = useRankingSquadsPageContext();

  const hasValidAvatar = useImageExists(data?.src);
  const orderedDevs = useMemo(() => [...data?.users ?? []].sort((a, b) => b.points - a.points), [data?.users])
  const orderedSquads = useMemo(() => [...data?.squads ?? []].sort((a, b) => b.points - a.points), [data?.squads]);

  const tableData = useMemo(() => {
    if (dev) return orderedDevs;
    return orderedSquads;
  }, [dev, orderedDevs, orderedSquads]);

  if (isLoading) return (
    <>
      <S.GlobalStyles />
      <S.Loading icon='line-md:loading-loop' />
    </>
  );
  if (!data) return null;

  const { src, users } = data;

  const [first, second, third] = orderedSquads;

  const getLeaderAvatar = (squad: Squad) => {
    const leaderUser = users?.find(u => String(u.id) === squad.leaderId ||
      (u.squadId === squad.id && u.role === 'leader'));

    return leaderUser?.pictureLink;
  };

  const renderPodiumStep = (squad: Squad | undefined) => {
    const avatar = squad ? getLeaderAvatar(squad) : undefined;
    const podium = () => {
      if (squad === first) return { number: '1', position: 'first' }
      else if (squad === second) return { number: '2', position: 'second' }
      return { number: '3', position: 'third' };
    };
    return (
      <>
        {avatar && hasValidAvatar ? (
          <S.PodiumAvatarWrapper $position={podium().position as PodiumPositionType}>
            <S.PodiumAvatar src={avatar} alt='Líder do squad' />
            <S.PodiumPosition>{podium().number}</S.PodiumPosition>
          </S.PodiumAvatarWrapper>
        ) : (
          <S.PodiumAvatarWrapper $svg $position={podium().position as PodiumPositionType}>
            <S.IconUser icon='lucide:user-round' />
            <S.PodiumPosition>{podium().number}</S.PodiumPosition>
          </S.PodiumAvatarWrapper>
        )}
        <S.PodiumStep $position={podium().position as PodiumPositionType} />
      </>
    );
  };
  return (
    <>
      <S.GlobalStyles />

      <Header src={src} />

      <SubHeader dev={dev} />

      <S.Title>
        {!dev ?
          <>Tabela de Classificação<br /> de squads</> :
          <>Tabela de Classificação<br /> de desenvolvedores</>
        }
      </S.Title>

      <S.PodiumWrapper>
        {renderPodiumStep(second)}
        {renderPodiumStep(first)}
        {renderPodiumStep(third)}

        <S.TableWrapper>
          <S.TableHeader>
            <S.TableCellName>NOME</S.TableCellName>
            <S.TableCellScore>PONTUAÇÃO</S.TableCellScore>
          </S.TableHeader>

          {tableData?.map(
            row => (
              <S.TableRow key={row.id}>
                <S.TableCellName>{row.name}</S.TableCellName>
                <S.TableCellScore>{row.points}</S.TableCellScore>
              </S.TableRow>
            ),
          )}
        </S.TableWrapper>
      </S.PodiumWrapper>

      <S.Footer>all rights reserved to JVM launchpad</S.Footer>
    </>
  );
};


export default function RankingSquadsPage({ dev = false }: SquadsPageContentProps) {
  return (
    <RankingSquadsPageProvider>
      <RankingPageContent dev={dev} />
    </RankingSquadsPageProvider>
  )
}