import React from 'react';
import {

    View,
    Text,
    Image, 
    TouchableOpacity,
    StyleSheet

} from 'react-native';

const Lista = ({data})=>{

    return(

        <View style={styles.feed}>

            <View
            
                style={styles.viewPerfil}
            
            >

                <Image
                
                    source={{uri: data.foto_perfil}}
                    style={styles.fotoPerfil}

                />

                <Text
                
                style={styles.nomeUsuario}
                
                >{data.usuario}</Text>

            </View>

            <Image 
                
                style={styles.fotoPublicacao}
                source={{uri: data.foto_publicacao}}
                resizeMode="cover"
                            
            />
            
            <View style={styles.areaLike}>

                <TouchableOpacity>
                    <Image 
                    
                        source={require('../img/like.png')}
                        style={styles.iconeLike}

                    />

                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                    
                        source={require('../img/send.png')}
                        style={styles.iconeSend}

                    />

                </TouchableOpacity>

            </View>

            <View style={styles.textoDescricao}>

                <Text>

                    {data.descricao}

                </Text>

            </View>

        </View>

    )

}

const styles = StyleSheet.create({

    feed:{



    },

    viewPerfil:{

        flexDirection: 'row',
        flex:1,
        alignItems: 'center',
        padding: 8       
        

    },

    nomeUsuario:{

        fontSize: 21,
        textAlign: 'left',
        color: '#000',
        marginLeft: 10

    },

    fotoPerfil:{

        width: 50,
        height: 50,
        borderRadius: 25

    },
    fotoPublicacao:{

        flex: 1,
        height: 200,
        alignItems: 'center'

    },

    areaLike:{

        flexDirection: 'row',
        padding: 5

    },

    iconeLike:{

        width: 25,
        height: 25

    },

    iconeSend:{

        width: 25,
        height: 25,
        marginLeft: 10

    },

    textoDescricao:{

        marginLeft: 8,
        marginBottom: 25

    }


});

export default Lista;