import React, { useEffect, useState } from 'react'
import { apiKey } from '@/constants/apiKey'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SearchBar } from 'react-native-screens'

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
    const [shouldSearch, setShouldSearch] = useState(false)

    useEffect(() => {
        if (search && shouldSearch) {
            let formattedTitle = title.split(' ').join('+')
            let addYear = releaseYear ? `&y=${releaseYear}` : ''
            fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${formattedTitle}${addYear}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => response.json()).then(data => { setMovieData(data) }).then(() => setShouldSearch(false))
        } else if (search) {
            setShouldSearch(true)
        }
    }, [search])

    const style = StyleSheet.create({
        movieTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'coral'
        },
        moviePlot: {
            fontSize: 15
        },
        movieImage: {
            width: 300,
            height: 450
        },
        container: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 20,
            gap: 10,
            marginHorizontal: 5
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
