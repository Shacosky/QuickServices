import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Mesa9Login extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="9b9a298d-4b00-4e43-b401-00c67ee5a3c3" style={styles.mesa9Login}>
        <View data-layer="42b5a4b2-79f6-498c-8576-b85766700524" style={styles.mesa9Login_rectangulo74}></View>
        <Text data-layer="ee6fda86-e6c3-4fba-b66c-c9cd3d7799b3" style={styles.mesa9Login_iniciaSesionConTuCorreoYContrasena}>Inicia sesión con tu correo y contraseña</Text>
        <Text data-layer="5dc9ff0b-c947-4e8b-9b32-cce7ff42479f" style={styles.mesa9Login_primeraVezEnQuickservices}>¿Primera vez en QuickServices?</Text>
        <View data-layer="a3b99738-db52-4ed0-b064-02958a2ec296" style={styles.mesa9Login_grupo193}>
            <View data-layer="90ffbeed-24af-4f7e-ac5d-81b8f149e861" style={styles.mesa9Login_grupo193_grupo192}>
                <View data-layer="a3f36ce2-e137-4403-959c-73ace946780b" style={styles.mesa9Login_grupo193_grupo192_rectangulo94}></View>
            </View>
            <Text data-layer="24fcc4ed-2238-477b-a508-5dc271227d6b" style={styles.mesa9Login_grupo193_ingresar}>INGRESAR</Text>
        </View>
        <Text data-layer="b4aa55c8-6287-497a-9835-ff526309295f" style={styles.mesa9Login_quickservices}>QuickServices</Text>
        <View data-layer="b436d10b-8c18-405e-a6ba-1e3737fd7d97" style={styles.mesa9Login_grupo194}>
            <View data-layer="0f1eef1d-dc8c-4a1a-a49d-e9b62a1cf482" style={styles.mesa9Login_grupo194_rectangulo92}></View>
            <Text data-layer="77f7df08-df84-4f56-9981-4c87001a5d4b" style={styles.mesa9Login_grupo194_correoElectronico}>Correo electrónico</Text>
        </View>
        <Text data-layer="55167c9f-d53c-4668-b19d-2725a24c4030" style={styles.mesa9Login_olvideMiContrasena}>Olvidé mi contraseña</Text>
        <View data-layer="d3fcd383-b8cf-49a9-b54a-84be52603ed6" style={styles.mesa9Login_grupo222}>
            <View data-layer="469b1688-c3b0-4b95-a699-78fe3a73d1b3" style={styles.mesa9Login_grupo222_rectangulo93}></View>
            <Text data-layer="a95d4a56-fed5-49da-9789-e35966f5619c" style={styles.mesa9Login_grupo222_contrasena}>Contraseña</Text>
        </View>
        <View data-layer="80e7bb13-28e9-4185-9eba-6b43a7ce7af1" style={styles.mesa9Login_grupo396}>
            <Text data-layer="644cec61-3295-48fc-85b6-cfd760c3e8ef" style={styles.mesa9Login_grupo396_registrarseAqui}>REGISTRARSE AQUÍ</Text>
            <Svg data-layer="11c05a73-7493-45ea-a730-afa779f9a720" style={styles.mesa9Login_grupo396_linea2} preserveAspectRatio="none" viewBox="0 -0.5 153 1" fill="transparent"><SvgPath d="M 0 0 L 153 0"  /></Svg>
        </View>
        <View data-layer="3d50cb0c-6fdf-4fd0-8548-68a29f464618" style={styles.mesa9Login_grupo232}>
            <ReactImage data-layer="26819cd5-632d-4d3e-845e-6cef8a10863b" source={require('./assets/grupo231.png')} style={styles.mesa9Login_grupo232_grupo231} />
        </View>
    </ScrollView>
    );
  }
}

Mesa9Login.propTypes = {

}

Mesa9Login.defaultProps = {

}


const styles = StyleSheet.create({
  "mesa9Login": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 393,
    "height": 852,
    "left": 0,
    "top": 0
  },
  "mesa9Login_rectangulo74": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(0, 0, 0, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.24705882352941178,
    "shadowOffset": {
      "width": 0,
      "height": 4
    },
    "shadowRadius": 4,
    "width": 413,
    "height": 874,
    "left": -11,
    "top": -11
  },
  "mesa9Login_iniciaSesionConTuCorreoYContrasena": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "600",
    "fontStyle": "normal",
    "fontFamily": "Avenir",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 276,
    "height": 20,
    "left": 47,
    "top": 147.02
  },
  "mesa9Login_primeraVezEnQuickservices": {
    "opacity": 0.800000011920929,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 14,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Avenir",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 200,
    "height": 19,
    "left": 47,
    "top": 429
  },
  "mesa9Login_grupo193": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 264,
    "height": 44,
    "left": 65,
    "top": 333
  },
  "mesa9Login_grupo193_grupo192": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 264,
    "height": 44,
    "left": 0,
    "top": 0
  },
  "mesa9Login_grupo193_grupo192_rectangulo94": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(255, 255, 255, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(255, 255, 255, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(255, 255, 255, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 22,
    "borderTopRightRadius": 22,
    "borderBottomLeftRadius": 22,
    "borderBottomRightRadius": 22,
    "width": 264,
    "height": 44,
    "left": 0,
    "top": 0
  },
  "mesa9Login_grupo193_ingresar": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 17,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Avenir",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 94,
    "height": 23,
    "left": 85,
    "top": 10.5
  },
  "mesa9Login_quickservices": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 45,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Avenir",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 285,
    "height": 61,
    "left": 54,
    "top": 55
  },
  "mesa9Login_grupo194": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 337,
    "height": 44,
    "left": 28,
    "top": 185
  },
  "mesa9Login_grupo194_rectangulo92": {
    "opacity": 0.5,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(255, 255, 255, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(255, 255, 255, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(255, 255, 255, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 22,
    "borderTopRightRadius": 22,
    "borderBottomLeftRadius": 22,
    "borderBottomRightRadius": 22,
    "width": 337,
    "height": 44,
    "left": 0,
    "top": 0
  },
  "mesa9Login_grupo194_correoElectronico": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 11,
    "fontWeight": "200",
    "fontStyle": "normal",
    "fontFamily": "Avenir",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 92,
    "height": 15,
    "left": 19,
    "top": 6
  },
  "mesa9Login_olvideMiContrasena": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 11,
    "fontWeight": "200",
    "fontStyle": "normal",
    "fontFamily": "Avenir",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 105,
    "height": 15,
    "left": 207,
    "top": 384
  },
  "mesa9Login_grupo222": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 337,
    "height": 44,
    "left": 28,
    "top": 259
  },
  "mesa9Login_grupo222_rectangulo93": {
    "opacity": 0.5,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(255, 255, 255, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(255, 255, 255, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(255, 255, 255, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 22,
    "borderTopRightRadius": 22,
    "borderBottomLeftRadius": 22,
    "borderBottomRightRadius": 22,
    "width": 337,
    "height": 44,
    "left": 0,
    "top": 0
  },
  "mesa9Login_grupo222_contrasena": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 11,
    "fontWeight": "200",
    "fontStyle": "normal",
    "fontFamily": "Avenir",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 56,
    "height": 15,
    "left": 19,
    "top": 6
  },
  "mesa9Login_grupo396": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 153.5,
    "height": 19.5,
    "left": 47,
    "top": 465
  },
  "mesa9Login_grupo396_registrarseAqui": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Avenir",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 153,
    "height": 19,
    "left": 0,
    "top": 0
  },
  "mesa9Login_grupo396_linea2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 153,
    "height": 1,
    "left": 0.5,
    "top": 19
  },
  "mesa9Login_grupo232": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 22.85,
    "height": 22.85,
    "left": 25,
    "top": 26
  },
  "mesa9Login_grupo232_grupo231": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 22.85,
    "height": 22.85,
    "left": 0,
    "top": 0
  },
  "mesa9Login_grupo232_grupo231_trazado443": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 17.86,
    "height": 17.86,
    "left": 2.49,
    "top": 2.5
  },
  "mesa9Login_grupo232_grupo231_elipse10": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 29.84,
    "height": 29.84,
    "left": -3.5,
    "top": -3.49
  },
  "mesa9Login_grupo232_grupo231_trazado444": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 12.52,
    "height": 17.34,
    "left": 4.23,
    "top": 2.76
  },
  "mesa9Login_grupo232_grupo231_rectangulo104": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 21.85,
    "height": 21.85,
    "left": -0.5,
    "top": -0.5
  }
});