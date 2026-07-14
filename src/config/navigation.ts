import {
	BookOpen,
	Gift,
	Building2,
	ArrowUpCircle,
	LayoutGrid,
	Coins,
	Gamepad2,
	Newspaper,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavigationItem {
	key: string // 用于翻译键，如 'codes' -> t('nav.codes')
	path: string // URL 路径，如 '/codes'
	icon: LucideIcon // Lucide 图标组件
	isContentType: boolean // 是否对应 content/ 目录
}

export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'guide', path: '/guide', icon: BookOpen, isContentType: true },
	{ key: 'codes', path: '/codes', icon: Gift, isContentType: true },
	{ key: 'buildings', path: '/buildings', icon: Building2, isContentType: true },
	{ key: 'upgrades', path: '/upgrades', icon: ArrowUpCircle, isContentType: true },
	{ key: 'layout', path: '/layout', icon: LayoutGrid, isContentType: true },
	{ key: 'money', path: '/money', icon: Coins, isContentType: true },
	{ key: 'controls', path: '/controls', icon: Gamepad2, isContentType: true },
	{ key: 'updates', path: '/updates', icon: Newspaper, isContentType: true },
]

// 从配置派生内容类型列表（用于路由和内容加载）
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
) // 移除开头的 '/' -> ['guide', 'codes', 'buildings', 'upgrades', 'layout', 'money', 'controls', 'updates']

export type ContentType = (typeof CONTENT_TYPES)[number]

// 辅助函数：验证内容类型
export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
