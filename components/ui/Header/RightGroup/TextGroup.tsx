import Image from 'next/image'
import { Text, Space, Menu, Group } from '@mantine/core'
import {
  IconBrandDiscord,
  IconBrandInstagram,
  IconBrandReddit,
  IconBrandTiktok,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons'
import BlankLink from './BlankLink'
import MenuButton, { MenuItem } from './MenuButton'
import NavButton from './NavButton'

const exploreList = [
  {
    title: 'All NFTs',
    svg: 'allnfts-light',
  },
  {
    title: 'Solana NFTs',
    svg: 'solana-light',
  },
  {
    title: 'Art',
    svg: 'art-light',
  },
  {
    title: 'Collectibles',
    svg: 'collectibles-light',
  },
  {
    title: 'Domain Names',
    svg: 'domain-names-light',
  },
  {
    title: 'Music',
    svg: 'music-light',
  },
  {
    title: 'Photography',
    svg: 'photography-category-light',
  },
  {
    title: 'Sports',
    svg: 'sports-light',
  },
  {
    title: 'Trading Cards',
    svg: 'trading-cards-light',
  },
  {
    title: 'Utility',
    svg: 'utility-light',
  },
  {
    title: 'Virtual Worlds',
    svg: 'virtual-worlds-light',
  },
]

const ExploreItems: MenuItem[] = exploreList.map(
  (item) =>
    ({
      title: item.title,
      icon: (
        <Image
          src={`/svgs/${item.svg}.svg`}
          height={24}
          width={24}
          alt={item.title}
        />
      ),
    } as MenuItem)
)

const StatsItems: MenuItem[] = [
  { title: 'Rankings', href: '/rankings' },
  { title: 'Activity', href: '/activity' },
]

const ResourcesItems: MenuItem[] = [
  { title: 'Helo Center', href: '/help-center' },
  { title: 'Platform', href: '/platform' },
  { title: 'Partners', href: '/partners' },
  { title: 'Taxes', href: '/taxes' },
  { title: 'Blog', href: '/blog' },
  { title: 'Docs', href: '/docs' },
  { title: 'Newsletter', href: '/newsletter' },
]

const LogoItem = () => {
  return (
    <Menu.Item
      sx={{
        borderBottom: '1px solid #eee',
        borderRadius: '0px',
        fontSize: 15,
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
      key="logos"
    >
      <Group>
        <BlankLink title="Twitter" href="https://twitter.com/opensea">
          <IconBrandTwitter size={18} />
        </BlankLink>
        <BlankLink title="Instragram" href="https://www.instagram.com/opensea">
          <IconBrandInstagram size={18} />
        </BlankLink>
        <BlankLink title="Discord" href="https://discord.com/invite/opensea">
          <IconBrandDiscord size={18} />
        </BlankLink>
        <BlankLink title="Reddit" href="https://www.reddit.com/r/opensea">
          <IconBrandReddit size={18} />
        </BlankLink>
        <BlankLink title="Youtube" href="https://www.youtube.com/c/OpenSeaTV">
          <IconBrandYoutube size={18} />
        </BlankLink>
        <BlankLink
          title="Tiktok"
          href="https://www.tiktok.com/@opensea?lang=en"
        >
          <IconBrandTiktok size={18} />
        </BlankLink>
      </Group>
    </Menu.Item>
  )
}

const TextGroup = () => {
  return (
    <>
      <MenuButton items={ExploreItems}>
        <NavButton title="Explore" href="/explore">
          <Text size={17} weight={'bold'}>
            Explore
          </Text>
        </NavButton>
      </MenuButton>

      <Space w="lg" />

      <MenuButton items={StatsItems}>
        <NavButton title="Stats" href="/stats">
          <Text size={17} weight={'bold'}>
            Stats
          </Text>
        </NavButton>
      </MenuButton>

      <Space w="lg" />

      <MenuButton items={ResourcesItems} diyItem={<LogoItem />}>
        <NavButton title="Rescource" href="/resource">
          <Text size={17} weight={'bold'}>
            Resources
          </Text>
        </NavButton>
      </MenuButton>

      <Space w="lg" />

      <NavButton title="Create" href="/create">
        <Text size={17} weight={'bold'}>
          Create
        </Text>
      </NavButton>
    </>
  )
}

export default TextGroup
