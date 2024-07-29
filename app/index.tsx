import { Stack, Link } from 'expo-router';
import { View } from 'react-native';
import { KeyboardGestureArea, KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import Animated from 'react-native-reanimated';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { Input } from '~/components/ui/input';
export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Without Ref' }} />
      <Container>
        <Link href="/details" asChild>
          <Button title="Go to with Ref" className="mb-8" />
        </Link>
        <KeyboardGestureArea
          interpolator="ios"
          style={{
            flex: 1,
          }}>
          <Animated.FlatList
            renderScrollComponent={(props) => (
              <KeyboardAwareScrollView bottomOffset={12} {...props} />
            )}
            data={new Array(20).fill(0)}
            ItemSeparatorComponent={() => <View className="bg-background h-4" />}
            renderItem={({ index }) => <Input placeholder="Placeholder" />}
          />
        </KeyboardGestureArea>
      </Container>
    </>
  );
}
