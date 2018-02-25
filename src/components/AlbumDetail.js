import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import Button from './Button';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    console.log(props.album);
    return (
        <Card>
            <CardSection style={styles.thumbnailContainerStyle}>
                <View>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{ uri: props.album.thumbnail_image }} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}> {props.album.title} </Text>
                    <Text> {props.album.artist} </Text>
                </View>

            </CardSection>
            <CardSection>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: props.album.image }}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(props.album.url)}>
                    buy me
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    headerTextStyle: {
        fontSize: 18
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
}
export default AlbumDetail;