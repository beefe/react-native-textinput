'use strict';
 
var React = require('react-native');
var { 
	StyleSheet, 
	PropTypes, 
	View, 
	Text, 
	Image,
	TextInput,
	TouchableOpacity, 
	TouchableNativeFeedback,
	Dimensions,
	Platform
} = React;

var Input = React.createClass({

	displayName: 'Input',

	statics: {
		title: '<Input>',
		description: 'input',
	},

	getDefaultProps() {
		return {
			autoFocus: false,
			placeholder: '',
			autoCorrect: false,
			keyboardType: 'default',
			maxLength: null,
			placeholderTextColor: '#c3c3c3',
			editable: true,
			clearButtonMode: ''
		};
	},

	getInitialState() {
		return {
			iptVal: '',
			isediting: false
		};
	},

	render() {
		if(Platform.OS === 'ios'){
			return (
				<TextInput 
					style={[styles.inputText,this.props.style]}
					autoFocus={this.props.autoFocus}
					autoCorrect={this.props.autoCorrect}
					keyboardType={this.props.keyboardType}
					maxLength = {this.props.maxLength}
					onChangeText = {(text) => this.props.onChangeText(text)}
					value={this.props.value}
					placeholder={this.props.placeholder}
					placeholderTextColor={this.props.placeholderTextColor}
					editable={this.props.editable}
					//ios only
					clearButtonMode={this.props.clearButtonMode}
				/>
			);
		}
		else{
			return (
				<View style={[styles.inputWrap,this.props.style]}>
					<TextInput 
						style={{flex: 1,marginLeft: 0,paddingLeft: 0}}
						autoFocus={this.props.autoFocus}
						autoCorrect={this.props.autoCorrect}
						keyboardType={this.props.keyboardType}
						onChangeText={(text) => {
							this.props.onChangeText(text);
						}}
						onFocus={() => {
							this.setState({
								isediting: true
							});
						}}
						onBlur={() => {
							this.setState({
								isediting: false
							});
						}}
						value={this.props.value}
						placeholder={this.props.placeholder}
						placeholderTextColor={this.props.placeholderTextColor}
						editable={this.props.editable}
						underlineColorAndroid={'#fff'}
					/>
					{this.state.isediting ?
					<TouchableOpacity style={this.props.clearButtonMode && this.props.value ? styles.inputDel : ''} onPress={this.props._onDelTextHandle}>
						<Image style={this.props.clearButtonMode && this.props.value ? styles.inputDelImg : styles.inputDelImgNone} resizeMode={'stretch'} source={require('./img/icon_delete.png')} />
					</TouchableOpacity> :
					<View></View>
					}
				</View>
			);
		}
	}

});

var styles = StyleSheet.create({
	inputWrap: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		height: 43,
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputText: {
		color: '#222',
		fontSize: 14,
	},
	inputDel: {
		position: 'absolute',
		right: 0,
		top: 10,
		width: 16,
		height: 16,
		borderRadius: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputDelText: {
		color: '#fff',
		fontSize: 14,
		fontWeight: 'bold',
	},
	inputDelImg: {
		width: 16,
		height: 16,
		opacity: 0.2
	},
	inputDelImgNone: {
		width: 0,
		height: 0
	},
});

module.exports = Input;
