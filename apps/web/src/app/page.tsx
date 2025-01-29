import Builder from '@dejizen/builder/builder'
import { CmsEnum } from '@dejizen/builder/models'
import * as CustomComponents from '../components/custom'

export default async function Home() {
  const components: Record<string, any> = { ...CustomComponents }

  for (const key in components) {
    components[key] = components[key].default
  }

  return (
    <Builder
      token={process.env.NEXT_PUBLIC_DATO_CMS_TOKEN || ''}
      cms={CmsEnum.DATO}
      slug='home'
      customComponents={components}
    />
  )
}
