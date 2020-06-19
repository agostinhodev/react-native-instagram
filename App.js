import React, {useState, useEffect} from 'react';
import { 

  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity,
  FlatList

} from 'react-native';
import Lista from './src/lista';

export default function App() {

  const [feed, setFeed] = useState(

    [
      {
        "id": "1", 
        "usuario": "@billgates", 
        "descricao": "Windows XP tá de volta, galerinha!", 
        "foto_perfil": "https://i.postimg.cc/d3Srv6GL/01-bill-gates-profile.png", 
        "foto_publicacao": "https://i.postimg.cc/CMvjjh9S/01-bill-gates-public.jpg",  
        "curtida": false, 
        "likes": 0
      },

      {
        "id": "2", 
        "usuario": "@linustorvals", 
        "descricao": "Linux é melhor que Windows haha", 
        "foto_perfil": "https://i.postimg.cc/mgZkVC9n/02-linus-torvalds-profile.png", 
        "foto_publicacao": "https://i.postimg.cc/YCX9P0fC/02-linus-torvalds-public.png",  
        "curtida": false, 
        "likes": 0
       },

       {
        "id": "3", 
        "usuario": "@markzuckerberg", 
        "descricao": "Facebook é toppp", 
        "foto_perfil": "https://i.postimg.cc/BZyBrZpN/03-mark-zuckerberg-profile.png", 
        "foto_publicacao": "https://i.postimg.cc/3xQCwLPv/03-mark-zuckerberg-public.png",  
        "curtida": false, 
        "likes": 0
       },

       {
        "id": "4", 
        "usuario": "@sergeybrin", 
        "descricao": "hahaha os carinhas aí são engraçados", 
        "foto_perfil": "https://i.postimg.cc/Dyn1kWsr/04-sergey-brin-profile.png", 
        "foto_publicacao": "https://i.postimg.cc/jdcPssQG/04-sergey-brin-public.png",  
        "curtida": false, 
        "likes": 0
       },

       {
        "id": "5", 
        "usuario": "@stevejobs", 
        "descricao": "MacOS - melhor do mundo", 
        "foto_perfil": "https://i.postimg.cc/cJSSXNPL/05-steve-jobs-profile.png", 
        "foto_publicacao": "https://i.postimg.cc/mryGn5GN/05-steve-jobs-public.png",  
        "curtida": false, 
        "likes": 0
       }
    ]

  );
  
  return (
    
    <View style={styles.container}>
      
      <View style={styles.header}>

        <TouchableOpacity>
          <Image 
          
            source={require('./src/img/logo.png')}
            style={styles.logo}

          />
        </TouchableOpacity>

        <TouchableOpacity>

          <Image 
            
            source={require('./src/img/send.png')}
            style={styles.send}

          />

        </TouchableOpacity>

      </View>
      
      <FlatList 
      
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Lista data={item}/> }
        data={feed}        
        keyExtractor={(item) => item.id}
      
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1
    
  },

  header:{

    height: 55,
    flexDirection: 'row',
    backgroundColor: '#FFf',
    top: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7,

    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
    marginBottom: 30

  },
  
  logo:{

    

  },

  send:{

    width: 23,
    height: 23

  }
  
});
