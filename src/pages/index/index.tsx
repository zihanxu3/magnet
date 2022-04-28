import { Component } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import { AtCard, AtFab } from "taro-ui"
import Taro from '@tarojs/taro'
import './index.scss'


export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleButtonClick() {
    Taro.navigateTo({
      url:'../../pages/start/index'
    });
  }

  render () {
    return (
      <View> 
        <ScrollView>

        <View style={{margin: 20}}>
            <AtCard
              title='十点半Dean403喝酒'
              note='地点: the dean 403'
            ></AtCard>
          </View> 

          <View style={{margin: 20}}>
            <AtCard
              title='十点半Dean403喝酒'
              note='地点: the dean 403'
            ></AtCard>
          </View> 

          <View style={{margin: 20}}>
            <AtCard
              title='十点半Dean403喝酒'
              note='地点: the dean 403'
            ></AtCard>
          </View> 
          
          <View style={{margin: 20}}>
            <AtCard
              title='十点半Dean403喝酒'
              note='地点: the dean 403'
            ></AtCard>
          </View> 

          <View style={{margin: 20}}>
            <AtCard
              title='十点半Dean403喝酒'
              note='地点: the dean 403'
            ></AtCard>
          </View>

          <View style={{margin: 20}}>
            <AtCard
              title='十点半Dean403喝酒'
              note='地点: the dean 403'
            ></AtCard>
          </View> 

          <View style={{margin: 20}}>
            <AtCard
              title='十点半Dean403喝酒'
              note='地点: the dean 403'
            ></AtCard>
          </View> 

          <View style={{margin: 20}}>
            <AtCard
              title='十点半Dean403喝酒'
              note='地点: the dean 403'
            ></AtCard>
          </View> 

          <View style={{margin: 20}}>
            <AtCard
              title='十点半Dean403喝酒'
              note='地点: the dean 403'
            ></AtCard>
          </View> 

          <View style={{margin: 20}}>
            <AtCard
              title='十点半Dean403喝酒'
              note='地点: the dean 403'
            ></AtCard>
          </View> 
        </ScrollView>
        <View style={{position: 'fixed', bottom: 20, right: 30}}>
          <AtFab onClick={this.handleButtonClick}>
              <Text className='at-fab__icon at-icon at-icon-add'
              ></Text>
          </AtFab>
        </View>
      </View> 
    )
  }
}
