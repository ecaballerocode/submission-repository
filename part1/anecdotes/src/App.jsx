import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const votesArray = Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(votesArray)
  const [mostVoted, setMostVoted] = useState("")

  const handleAnecdote = () => {
    const random = () => {
      return Math.floor(Math.random() * (9))
    }
    setSelected(random)
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    const number = Math.max(...copy)
    const index = copy.indexOf(number)
    setMostVoted(anecdotes[index])
    setVotes(copy)
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>Has {votes[selected]} votes</p>
      <div>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleAnecdote}>Next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <p>{mostVoted}</p>
      <p>Has {votes[anecdotes.indexOf(mostVoted)]}</p>
    </div>
  )
}

export default App