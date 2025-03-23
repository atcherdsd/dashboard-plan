import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
  ShopOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const mainNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'sidenav.main',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'main-dashboard',
      path: `${APP_PREFIX_PATH}/main/dashboard`,
      title: 'sidenav.main.dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: [],
    },
    {
      key: 'main-catalog',
      path: `${APP_PREFIX_PATH}/main/catalog`,
      title: 'sidenav.main.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-catalog-productList',
          path: `${APP_PREFIX_PATH}/main/catalog/product-list`,
          title: 'sidenav.main.catalog.productList',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'main-catalog-categories',
          path: `${APP_PREFIX_PATH}/main/catalog/categories`,
          title: 'sidenav.main.catalog.categories',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'main-catalog-collections',
          path: `${APP_PREFIX_PATH}/main/catalog/collections`,
          title: 'sidenav.main.catalog.collections',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'main-catalog-combo',
          path: `${APP_PREFIX_PATH}/main/catalog/combo`,
          title: 'sidenav.main.catalog.combo',
          icon: '',
          breadcrumb: true,
          submenu: []
        }
      ]
    },
    {
      key: 'main-orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'sidenav.main.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: [],
    },
    {
      key: 'main-clients',
      path: `${APP_PREFIX_PATH}/main/clients`,
      title: 'sidenav.main.clients',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-clients-clientList',
          path: `${APP_PREFIX_PATH}/main/clients/client-list`,
          title: 'sidenav.main.clients.clientList',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'main-clients-clientGroup',
          path: `${APP_PREFIX_PATH}/main/clients/client-group`,
          title: 'sidenav.main.clients.clientGroup',
          icon: '',
          breadcrumb: true,
          submenu: []
        }
      ],
    },
    {
      key: 'main-banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'sidenav.main.banners',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: [],
    },
    {
      key: 'main-promo',
      path: `${APP_PREFIX_PATH}/main/promo`,
      title: 'sidenav.main.promo',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: [],
    },
    {
      key: 'main-offlinePoints',
      path: `${APP_PREFIX_PATH}/main/offline-points`,
      title: 'sidenav.main.offlinePoints',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-offlinePoints-addresses',
          path: `${APP_PREFIX_PATH}/main/offline-points/addresses`,
          title: 'sidenav.main.offlinePoints.addresses',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'main-offlinePoints-geofences',
          path: `${APP_PREFIX_PATH}/main/offline-points/geofences`,
          title: 'sidenav.main.offlinePoints.geofences',
          icon: '',
          breadcrumb: true,
          submenu: []
        }
      ],
    },
    {
      key: 'main-employees',
      path: `${APP_PREFIX_PATH}/main/employees`,
      title: 'sidenav.main.employees',
      icon: UsergroupAddOutlined,
      breadcrumb: true,
      submenu: [],
    },
    {
      key: 'main-mail',
      path: `${APP_PREFIX_PATH}/main/mail/inbox`,
      title: 'sidenav.main.mail',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: [],
    },
  ]
}]

const systemNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'sidenav.system',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'system-setting',
      path: `${APP_PREFIX_PATH}/system/setting`,
      title: 'sidenav.system.setting',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: [],
    },
    {
      key: 'system-mobileApp',
      path: `${APP_PREFIX_PATH}/system/mobile-app`,
      title: 'sidenav.system.mobileApp',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: [],
    },
    {
      key: 'system-changelogs',
      path: `${APP_PREFIX_PATH}/system/changelogs`,
      title: 'sidenav.system.changelogs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: [],
    }
  ]
}]

const navigationConfig = [
  ...mainNavTree,
  ...systemNavTree
]

export default navigationConfig;
