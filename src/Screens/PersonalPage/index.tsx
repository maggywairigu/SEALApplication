import {Image, View} from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Button from '../../Components/Button';
import Text from '../../Components/Text';
import {getStyles} from './defaultCSS';
import PracticeSession from '../../Assets/svg/practice_session.svg';
import AssignTasks from '../../Assets/svg/assign_tasks.svg';
import {Appbar} from 'react-native-paper';
import {useFontContext} from '../../Contexts/FontContext';

const Index = ({navigation}) => {
  const {selectedFontConfig, setSelectedFontConfig} = useFontContext();
  const styles = getStyles(selectedFontConfig);
  return (
    <BackgroundWrapper>
      <Appbar.BackAction onPress={() => navigation.navigate('Home')} />

      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.header}>Welcome, James</Text>
          <Text style={styles.subheader}>Activities</Text>
          <View style={styles.row}>
            <View style={styles.rowItem}>
              <PracticeSession />
              <Text style={styles.itemTitle}>Practice sessions</Text>
              <Text style={styles.itemText}>
                Focused practices, skill builders, step-by-step sessions and
                'repeat & refine'
              </Text>
            </View>
            <View style={styles.rowItem}>
              <AssignTasks />
              <Text style={styles.itemTitle}>Assigned tasks</Text>
              <Text style={styles.itemText}>
                Complete the tasks assigned to you by your teacher
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Button
            title="Eye contact practice"
            icon="eye"
            onPress={() => navigation.navigate('Welcome')}
          />
          <Button
            light
            title="Achievements"
            icon="trophy"
            onPress={() => navigation.navigate('Achievements')}
          />
        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default Index;
