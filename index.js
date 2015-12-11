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
			clearButtonMode: 'while-editing'
		};
	},

	getInitialState() {
		return {
			iptVal: '',
		};
	},

	render() {
		if(Platform.OS === 'ios'){
			return (
				<View style={styles.inputBox}>
					<Text style={styles.inputLabel}>{this.props.labelText}</Text>
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
				</View>
			);
		}
		else{
			return (
				<View style={styles.inputBox}>
					<Text style={styles.inputLabel}>{this.props.labelText}</Text>

					<TextInput 
						style={[styles.inputText,this.props.style]}
						autoFocus={this.props.autoFocus}
						autoCorrect={this.props.autoCorrect}
						keyboardType={this.props.keyboardType}
						onChangeText={(text) => this.props.onChangeText(text)}
						value={this.props.value}
						placeholder={this.props.placeholder}
						placeholderTextColor={this.props.placeholderTextColor}
						editable={this.props.editable}
						underlineColorAndroid={'#fff'}
					/>

					<TouchableOpacity style={this.props.value ? styles.inputDel : ''} onPress={this.props._onDelTextHandle}>
						<Image style={this.props.value ? styles.inputDelImg : styles.inputDelImgNone} resizeMode={'stretch'} source={require('./img/btn_delete.png')} />
					</TouchableOpacity>
				</View>
			);
		}
	}

});

/*
*平台兼容性
*name                    ios         andriod
*clearButtonMode		  1              0
*maxLength                1              0
*
*underlineColorAndroid    0              1

*/
var styles = StyleSheet.create({
	inputBox: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		height: 43,
		width: Dimensions.get('window').width,
		justifyContent: 'center',
		alignItems: 'center',
		paddingRight: 25,
		paddingLeft: 15,

	},
	inputLabel: {
		flex: 1,
		color: '#222',
		fontSize: 15,
		textAlign: 'left',
		
	},
	inputText: {
		flex: 3,
		color: '#222',
		fontSize: 14,
	},
	inputDel: {
		position: 'absolute',
		right: 15,
		top: 10,
		width: 16,
		height: 16,
		borderRadius: 16, 
		backgroundColor: '#aaa',
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
		height: 16
	},
	inputDelImgNone: {
		width: 0,
		height: 0
	},
});

module.exports = Input;
