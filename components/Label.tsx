interface LabelProps {
    name: string,
    type: string,
}

const style = ({type}) => ({
    borderRadius: '25%',
    backgroundColor: type === 'private' ? 'orange' : 'blue',
    color: 'white',
    padding: '0 8px',
    margin: '0 4px',
    fontSize: '10px',
})

export default function Label({ name, type }: LabelProps): JSX.Element {
    return <span style={style({type})}>{name}</span>
}
