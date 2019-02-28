import React, { PureComponent } from 'react';
import connect from 'react-redux';
import {
  updateName,
  updateAge,
  updateWeight,
  addDog
} from '../../actions/dogCreate';
import {
  getDogCreateName,
  getDogCreateAge,
  getDogCreateWeight
} from '../../selectors/dogCreate';
import Dogs from '../../components/dogs/Dogs';
import AddDogForm from '../../components/dogs/AddDogForm';
import { getDogs } from '../../selectors/dogs';

function DogView({ name, age, weight, dogs, onChange, onSubmit }) {
  return (
    <>
      <AddDogForm name={name} age={age} weight={weight} onChange={onChange} onSubmit={onSubmit} />
      <Dogs dogs={dogs} />
    </>
  )
}

// For example props.match.params.id
const mapStateToProps = (state, props) => ({
  name: getDogCreateName(state),
  age: getDogCreateAge(state),
  weight: getDogCreateWeight(state),
  dogs: getDogs(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  onChange({ target }) {
    const factoryMethod = {
      name: updateName,
      age: updateAge,
      weight: updateWeight
    };

    dispatch(factoryMethod[target.name](target.value))
  },
  onSubmit(event) {
    event.preventDefault();
    const { name, age, weight } = props;
    dispatch(addDog({ name, age, weight }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogView)
