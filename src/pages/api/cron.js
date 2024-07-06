import { exec } from 'child_process'

export default function handler(req, res) {
  const command = 'node generate-sitemap.js'

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o comando: ${error.message}`)
      return
    }

    if (stderr) {
      console.error(`Erro: ${stderr}`)
      return
    }

    console.log(`Resultado:\n${stdout}`)
  })
}
