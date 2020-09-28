
import View from './elements/node.js'
import Link from './elements/link.js'
import Image from './elements/image.js'
import Video from './elements/video.js'
import Input from './elements/input.js'
import Text from './elements/text.js'

import render from './render/index'

class Aut {
    constructor() {
        this.type = 'Body'
        this.Node = View
        this.Link = Link
        this.Image = Image
        this.Video = Video
        this.Input = Input
        this.appId = 'app'
    }
    render(node) {
        render.init(node, this.appId)
    }
    renderTo(node, appId) {
        this.appId = appId
        this.render(node)
    }
    use(module) {
        if(!module) {
            console.log('您将绑定一个空白对象')
            return
        }
        if(!module.name) {
           console.log('您的模块不存在name属性，将无法进行处理')
           return
        }
        if(this[module.name]) {
            console.log('已经存在同名模块，将会覆盖之前的模板')
        }

        this[module.name] = module
    }

    // 添加一个扩展组件的接口
    // installPlugin(pulu) {

    // }

    // extendComponents(ui) {
    //     if (ui && ui.init) {
    //         ui.init()
    //     }
    // }
}

export default new Aut

// Base DisplayObject
// export const View = Node
// export const Image = Image1
// export const Text = Text
// export const Video = Video
// export const Audio = Audio

export {
    View,
    Image,
    Video,
    // Audio,
    Text
}

// 扩展

