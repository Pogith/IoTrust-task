import type { DAppsData } from '@/types/discovery';

export const mockDApps: DAppsData[] = [
  {
    id: 1,
    title: 'MoonPay',
    imageSrc: '/images/icon_moonpay.png',
    url: 'https://buy.moonpay.com',
    description_en:
      'MoonPay offers simple and safer way to buy crypto instantly using VISA/Mastercard payment',
    note: '영어를 사용하는 아이폰 사용자에게만 노출 됩니다.',
  },
  {
    id: 2,
    title: 'FTSO Portal',
    imageSrc: '/images/icon_ftso.png',
    url: 'https://ftsoportal.com/',
    description_en:
      'FTSO Portal is a service by D’CENT to provide fast and easy way to delegate Vote Power.',
    description_ko:
      'FTSO Portal은 사용자가 원하는 FTSO provider에 Vote Power 쉽고 빠르게 위임할 수 있는 기능을 제공하는 디센트의 서비스입니다.',
    supported_network: 'Songbird, Flare',
  },
  {
    id: 3,
    title: 'Astar Portal',
    imageSrc: '/images/icon_astar.png',
    url: 'https://portal.astar.network/',
    description_en:
      'Astar Portal is the official Astar Network application for using everything Astar offers.',
    description_ko:
      '아스타포탈은 Astar Network에서 제공하는 모든 것을 사용하기 위한 공식 애플리케이션입니다.',
    supported_network: 'Astar',
    note: 'dev/stage 환경에서만 노출 됩니다.',
  },
  {
    id: 4,
    title: '1inch',
    imageSrc: '/images/icon_1inch.png',
    url: 'https://app.1inch.io/',
    description_en:
      '1inch is a decentralized exchange (DEX) aggregator that rolls pricing and liquidity into one platform.',
    description_ko:
      '1inch는 주요 DEX 거래소의 유동성과 가격 정보를 하나로 모아 쉽게 조회할 수 있습니다.',
    supported_network: 'Ethereum',
  },
  {
    id: 5,
    title: 'XDSea',
    imageSrc: '/images/icon_xdsea.png',
    url: '',
    description_en:
      "XDSea is the world's first and largest NFT P2P marketplace built on the XDC Network.",
    description_ko:
      'XDSea는 XDC 네트워크 기반 세계 최초·최대 NFT 거래 분산 마켓입니다.',
    supported_network: 'XDC Network',
  },
  {
    id: 6,
    title: 'Compound',
    imageSrc: '/images/icon_compound.png',
    url: 'https://app.compound.finance/',
    description_en:
      "Compound is Ethereum's algorithmic money market protocol for borrowing and earning interest.",
    description_ko:
      'Compound는 담보 예치를 통해 이자 수익과 대출을 할 수 있는 이더리움 기반 프로토콜입니다.',
    supported_network: 'Ethereum',
  },
  {
    id: 7,
    title: 'PoolTogether',
    imageSrc: '/images/icon_pooltogether.png',
    url: 'https://app.pooltogether.com/',
    description_en:
      'PoolTogether makes saving money fun using prize-linked savings pools.',
    description_ko:
      'PoolTogether는 저축을 재미있게 할 수 있는 이더리움 기반 서비스입니다.',
    supported_network: 'Ethereum',
  },
  {
    id: 8,
    title: 'OpenSea',
    imageSrc: '/images/icon_opensea.png',
    url: 'https://opensea.io/',
    description_en:
      'OpenSea is a marketplace for digital goods such as NFTs and digital art.',
    description_ko:
      'OpenSea는 디지털 상품과 NFT를 거래할 수 있는 마켓플레이스입니다.',
    supported_network: 'Ethereum, Polygon',
  },
  {
    id: 9,
    title: 'BlueWhale',
    imageSrc: '/images/icon_bluewhale.png',
    url: 'https://bwpm.io/',
    description_ko:
      '블루웨일 프로토콜은 클레이튼 디파이 생태계를 더 쉽고 효율적으로 만드는 디파이 서비스입니다.',
    supported_network: 'Kaia',
    note: '한국어 사용자들에게만 노출 됩니다.',
  },
];
