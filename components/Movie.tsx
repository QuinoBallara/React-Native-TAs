import React, { useEffect, useState } from 'react'
import { apiKey } from '@/constants/apiKey'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SearchBar } from 'react-native-screens'
import { useWindowDimensions } from 'react-native'

type MovieProps = {
    title: string,
    releaseYear?: string,
    search: boolean
}

type MovieData = {
    Title: string,
    Poster: string,
    Plot: string,
}
export const Movie = ({ title, releaseYear, search }: MovieProps) => {
    const [movieData, setMovieData] = useState<MovieData>()
    const windowHeight = useWindowDimensions().height;
    const windowWidth = useWindowDimensions().width;

    useEffect(() => {
        let formattedTitle = title.split(' ').join('+')
        let addYear = releaseYear ? `&y=${releaseYear}` : ''
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${formattedTitle}${addYear}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json()).then(data => { setMovieData(data) })
    }, [search])

    const style = StyleSheet.create({
        movieTitle: {
            fontSize: windowWidth / 20,
            fontWeight: 'bold',
            color: 'coral'
        },
        moviePlot: {
            fontSize: windowWidth / 30,
        },
        movieImage: {
            width: 300,
            height: 450
        },
        container: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: windowHeight / 100,
            gap: windowHeight / 60,
            marginHorizontal: windowWidth / 30
        }
    })

    return (
        <View >
            {movieData && (
                <View style={style.container}>
                    <Text style={style.movieTitle}>{movieData.Title}</Text>
                    <Text style={style.moviePlot}>{movieData.Plot}</Text>
                    <Image style={style.movieImage} source={{ uri: movieData.Poster }} />
                </View>
            )}
        </View>
    )
}
