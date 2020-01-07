import React, {useState, useRef} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import Animated, {
  Easing,
  Transition,
  Transitioning,
} from 'react-native-reanimated';
import {NavigationProp} from 'react-navigation';
import {Spacer} from '../../../UIKIT/lib';
import {ScrollView} from 'react-native-gesture-handler';

type PropType = {
  navigation: NavigationProp<any>;
};
// 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
function Sequence() {
  const transition = (
    <Transition.Sequence>
      <Transition.Out type="slide-right" />
      <Transition.Change interpolation="easeInOut" />
      <Transition.In type="slide-left" />
    </Transition.Sequence>
  );

  let [showText, setShowText] = useState(true);
  const ref = useRef();

  return (
    <Transitioning.View ref={ref} transition={transition}>
      <Button
        title="show or hide"
        color="#FF5252"
        onPress={() => {
          ref.current.animateNextTransition();
          setShowText(!showText);
        }}
      />
      {showText && (
        <Text style={styles.text}>Tap the above button to hide me</Text>
      )}
    </Transitioning.View>
  );
}

function Progress() {
  const transition = <Transition.Change interpolation="easeInOut" />;

  let [perc, setPerc] = useState(20);
  const ref = useRef();

  return (
    <Transitioning.View
      ref={ref}
      // style={styles.centerAll}
      transition={transition}>
      <Button
        title={perc + 20 <= 100 ? '+20%' : '-80%'}
        color="#FF5252"
        onPress={() => {
          ref.current.animateNextTransition();
          setPerc(perc + 20 <= 100 ? perc + 20 : 20);
        }}
      />
      <View style={styles.bar}>
        <View
          style={{height: 5, width: `${perc}%`, backgroundColor: '#FF5252'}}
        />
      </View>
    </Transitioning.View>
  );
}

const styles = StyleSheet.create({
  centerAll: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  bar: {
    marginTop: 30,
    height: 5,
    width: '80%',
    backgroundColor: '#aaa',
  },
  s: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    margin: 0,
  },
});

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function Shuffle() {
  const transition = (
    <Transition.Together>
      <Transition.Change interpolation="easeInOut" />
    </Transition.Together>
  );

  let [items, setItems] = useState([
    '🍇 Grapes',
    '🍈 Melon',
    '🍉 Watermelon',
    '🍊 Tangerine',
    '🍋 Lemon',
    '🍌 Banana',
  ]);
  const ref = useRef();

  const children = items.map(item => (
    <Text style={styles.text} key={item}>
      {item}
    </Text>
  ));

  return (
    <Transitioning.View ref={ref} transition={transition}>
      <Button
        title="shuffle"
        color="#FF5252"
        onPress={() => {
          ref.current.animateNextTransition();
          const shuffled = items.slice();
          shuffle(shuffled);
          setItems(shuffled);
        }}
      />
      {children}
    </Transitioning.View>
  );
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Hour = ({hour, min, pm}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'flex-end',
    }}>
    <Text style={{fontSize: 40, textAlignVertical: 'center', color: 'black'}}>
      {hour}:{min}
    </Text>
    <Text style={{color: 'gray', marginBottom: 7, marginLeft: 4}}>
      {pm ? 'PM' : 'AM'}
    </Text>
  </View>
);

const Location = ({label, name, delay}) => (
  <>
    <Text style={{color: 'gray'}}>{label}</Text>
    <Text style={{fontSize: 26, color: 'black'}}>{name}</Text>
  </>
);

const Spacerr = ({height}) => <View style={{flex: 1, maxHeight: height}} />;

const Tix = () => (
  <View style={{marginHorizontal: 20, flexGrow: 1}}>
    <Spacerr height={20} />
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
      }}>
      <Hour hour="11" min="45" am />
      <Text style={{fontSize: 40, color: 'black'}}>✈</Text>
      <Hour hour="1" min="55" pm />
    </View>
    <Spacerr height={20} />
    <Location label="From" name="Kraków (KRK)" delay={40} />
    <Spacer height={20} />
    <Location label="To" name="Amsterdam (AMS)" delay={80} />
    <Spacerr height={20} />
    <Text style={{color: 'gray'}}>Notes</Text>
    <Text style={{lineHeight: 20, color: 'black'}}>
      Crashtest Airlanes · Economy · Embraer RJ-175 {'\n'}
      CRA 2199 {'\n'}
      Plane and crew by Bold & Brave ltd.
    </Text>
    <View style={{flex: 2}} />
  </View>
);

function Ticket() {
  let [refreshed, setRefreshed] = useState(1);
  const ref = useRef();

  //   delayMs?: number;
  //     durationMs?: number;
  //     interpolation?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
  //     propagation?: 'top' | 'bottom' | 'left' | 'right';
  //   type?: 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-right' | 'slide-left';
  const transition = (
    <Transition.Sequence>
      <Transition.Out type="fade" durationMs={200} interpolation="easeIn" />
      <Transition.Change />
      <Transition.Together>
        <Transition.In
          propagation="left"
          type="slide-left"
          interpolation="easeOut"
          durationMs={200}
          delayMs={200}
        />
        <Transition.In
          type="slide-bottom"
          durationMs={200}
          delayMs={200}
          interpolation="easeOut"
          propagation="bottom"
        />

        <Transition.In type="fade" durationMs={200} delayMs={200} />
      </Transition.Together>
    </Transition.Sequence>
  );
  return (
    <View style={{flex: 1}}>
      <Button
        title="refresh"
        color="#FF5252"
        onPress={() => {
          ref.current.animateNextTransition();
          setRefreshed(refreshed + 1);
        }}
      />
      <Transitioning.View
        ref={ref}
        transition={transition}
        style={{
          flexGrow: 1,
          justifyContent: 'center',
        }}>
        <Tix key={refreshed} />
      </Transitioning.View>
    </View>
  );
}

function Screen5(props: PropType) {
  const {navigation} = useScreen5(props);

  return (
    <ScrollView>
      <View>
        {Sequence()}
        <Spacer size={100} />
        {Progress()}
        <Spacer size={100} />
        {Shuffle()}
        <Spacer size={100} />
        {Ticket()}
        <Spacer size={100} />
        {/* <Spacer size={100} /> */}
        <Button
          title={'nav to screen 1'}
          onPress={() => navigation.navigate('screen6')}
        />
        <Spacer size={100} />
      </View>
    </ScrollView>
  );
}

function useScreen5({navigation}: PropType) {
  return {navigation};
}

export default Screen5;
