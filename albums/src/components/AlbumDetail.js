import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const {
        thumbnailStyle,
        headerContentStyle,
        headerTextStyle,
        thumbnailContainerStyle,
        imageStyle,
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}> { title } </Text>
                    <Text> { artist }</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)} >
                    Buy Now
                </Button>
            </CardSection>

        </Card>
    );
};

const styles = {
    thumbnailStyle: {
      justifyContent: 'space-around',
        height: 50,
        width: 50,
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontWeight: 'bold',
    },
    thumbnailContainerStyle: {
       justifyContent: 'center',
       alignItems: 'center',
       marginRight: 10,
       marginLeft: 10,
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: 0,
    },

};

export default AlbumDetail;
