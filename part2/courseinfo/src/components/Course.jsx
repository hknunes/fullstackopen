const Header = (props) =>{
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Part = (props) =>{
    return(
    <p>
      {props.part.name} {props.part.exercises}
    </p>)
  }
  
  const Content = (props) =>{
    return(
      <div>
        {props.part.map((part) => (
            
        <Part key={part.id} part={part} />
      ))}
      </div>
    )
  }
  
  
  const Total = (props) =>{
    const total = props.parts.reduce((total,part) => {return total + part.exercises;}, 0)
    return(
      <p>Total of {total} exercises</p>
    )
  }
const Course = ({course}) => {

    return(
        <div>

        <Header course={course.name} />

        <Content part={course.parts} />
  
        <Total parts={course.parts}/>
        
      </div>
    )
}

export default Course