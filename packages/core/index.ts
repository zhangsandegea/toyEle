import { makeInstaller } from '@toyEle/utils'
import components from './components'
import '@toyEle/theme'

const installer = makeInstaller(components)

export * from '@toyEle/components'
export default installer