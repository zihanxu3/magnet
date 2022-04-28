import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtTag } from 'taro-ui'
import './index.scss'
import Taro from '@tarojs/taro'

type ListItem = {
  name: string
  active: boolean
}

interface TagPageState {
  solidTagList: ListItem[]
}

export default class Join extends Component<{}, TagPageState> {

  constructor(props: any) {
    super(props)
    this.state = {
      solidTagList: [
        { name: '桌游', active: false },
        { name: '剧本', active: false },
        { name: '酒局', active: false },
        { name: '德州', active: false },
        { name: '户外', active: false },
        { name: '学习', active: false },
        { name: '约饭', active: false },
        { name: '健身', active: false },
        { name: '线上', active: false },
        { name: '自定义', active: false },
      ],
    }
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  private onClick(data: ListItem): void {
    const { solidTagList } = this.state
    const findIndex = solidTagList.findIndex(item => item.name === data.name)
    const active = !solidTagList[findIndex].active
    const content = `您点击的 tag 标签名是：${data.name}，点击前是否选中：${data.active}，点击后：${active}`

    solidTagList[findIndex].active = active
    this.setState({ solidTagList })

    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      alert(content)
    } else {
      Taro.showModal({ content, showCancel: false })
    }
  }

  render() {
    return (
      <View className='index'>
        <Text style={{margin: 10}}>
           选择活动标签
        </Text>
        <View style={{marginLeft: 10, marginTop: 20}} className='at-row at-row--wrap'>
          {this.state.solidTagList.map((item, index) => (
            <View className='at-col at-col-4' 
            key={`at-tag-${index}`}>
              <AtTag
                name={item.name}
                type='primary'
                active={item.active}
                onClick={this.onClick.bind(this)}
              >
                {this.state.solidTagList[index].name}
              </AtTag>
            </View>
          ))}
        </View>
      </View>
    )
  }
}
