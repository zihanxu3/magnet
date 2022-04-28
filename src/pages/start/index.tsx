import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtInput, AtGrid, AtTextarea } from 'taro-ui'
import './index.scss'
import addIcon from '../../assets/add.png'
interface IProps {
}

interface IState {
  heading?: string;
  location?: string;
  notes?: string;
}

export default class Start extends Component<IProps, IState> {

  constructor(props) {
    super(props);
    this.state = {
      heading: '',
      location: '',
      notes: '',
    };
  }

  handleChange() {

  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View style={{paddingTop: 30}}>
        <AtInput
          required
          name='heading'
          title='活动标题'
          type='text'
          placeholder='酒局、剧本杀...'
          value={this.state.heading}
          onChange={this.handleChange}
        />
        <AtInput
          name='location'
          title='地点'
          type='text'
          placeholder='latitude 2022...'
          value={this.state.location}
          onChange={this.handleChange}
        />
        {/* shijian */}
        <AtInput
          name='notes'
          title='备注'
          type='text'
          placeholder='喝很多，没女生'
          value={this.state.notes}
          onChange={this.handleChange}
        />
        <View style={{marginTop: 20}}>
        <AtGrid 
        hasBorder={false}
        columnNum={6}
        data={
        [
          {
            image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
          },
          {
            image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
          },
          {
            image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
          },
          {
            image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
          },
          {
            image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
          },
          {
            image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
          },
          {
            image: addIcon,
          }
        ]
}>

        </AtGrid>
        </View>
      </View>
    )
  }
}
