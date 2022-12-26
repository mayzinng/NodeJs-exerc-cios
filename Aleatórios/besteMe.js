  const questions = [
    'O que aprendi hoje?',
    'O que me deixou mal?',
    'O que eu poderia melhorar?'
  ]

  const ask = (index = 0) => {
    return process.stdout.write(questions[index] + " => ")
  }

  ask(2)

  const answers = []
  process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
  })

  process.on('exit', ()=> {
    console.log('ok')
  })