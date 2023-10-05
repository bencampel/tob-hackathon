import { Text, Container } from "./chakra";

export default async function Home() {
  // simular espera
  await new Promise(resolve => setTimeout(resolve, 3000));

  return (
    <Container>
      <Text>Test chakra....</Text>
    </Container>
  )
}
