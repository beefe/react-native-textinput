#react-native-textinput 
##Platform
ios、android
##example
```
<Input
	autoFocus={true}
	keyboardType={'numeric'}
	maxLength={4}
	placeholder={'请输入你的邀请码'}
	onChangeText={(text) => this.setState({invitationCode: text})}
	_onDelTextHandle={() => this.setState({invitationCode: ''})}
	value={this.state.invitationCode}
/>
```