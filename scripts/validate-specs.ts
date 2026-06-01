import { validateAllSpecs } from '../lib/specs/loader'

try {
  validateAllSpecs()
  console.log('✓ Todos os specs foram validados com sucesso.')
} catch (error) {
  console.error('✗ Falha na validação dos specs:')
  console.error(error)
  process.exit(1)
}
