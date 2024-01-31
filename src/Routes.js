import { generatePath } from 'react-router'

export const indexPattern = '/'
export const generateIndexPattern = () => {
    return generatePath(indexPattern)
}