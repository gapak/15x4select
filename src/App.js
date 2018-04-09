import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './App.css';


const marks = [
  '0',
  'Absolute incompetent',
  'Slightly understand',
  'Dilettante understanding',
  'Young specialist',
  'Specialist',
  'Experienced specialist',
  'Confident professional',
  'Exceptional professional',
  'Recognized guru'
];

const numbers = {
  lecturer: [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'},
    {value: '6', label: '6'},
    {value: '7', label: '7'},
    {value: '8', label: '8'},
    {value: '9', label: '9'},
    {value: '10', label: '10'},
    {value: '11', label: '11'},
    {value: '12', label: '12'},
    {value: '13', label: '13'},
    {value: '14', label: '14'},
    {value: '15', label: '15'}
  ],
  theme: [
    {value: '16', label: '16'},
    {value: '17', label: '17'},
    {value: '18', label: '18'},
    {value: '19', label: '19'},
    {value: '20', label: '20'},
    {value: '21', label: '21'},
    {value: '22', label: '22'},
    {value: '23', label: '23'},
    {value: '24', label: '24'},
    {value: '25', label: '25'},
    {value: '26', label: '26'},
    {value: '27', label: '27'},
    {value: '28', label: '28'},
    {value: '29', label: '29'},
    {value: '30', label: '30'}
  ],
  volunteer: [
    {value: '31', label: '31'},
    {value: '32', label: '32'},
    {value: '33', label: '33'},
    {value: '34', label: '34'},
    {value: '35', label: '35'},
    {value: '36', label: '36'},
    {value: '37', label: '37'},
    {value: '38', label: '38'},
    {value: '39', label: '39'},
    {value: '40', label: '40'},
    {value: '41', label: '41'},
    {value: '42', label: '42'},
    {value: '43', label: '43'},
    {value: '44', label: '44'},
    {value: '45', label: '45'}
  ],
  action: [
    {value: '46', label: '46'},
    {value: '47', label: '47'},
    {value: '48', label: '48'},
    {value: '49', label: '49'},
    {value: '50', label: '50'},
    {value: '51', label: '51'},
    {value: '52', label: '52'},
    {value: '53', label: '53'},
    {value: '54', label: '54'},
    {value: '55', label: '55'},
    {value: '56', label: '56'},
    {value: '57', label: '57'},
    {value: '58', label: '58'},
    {value: '59', label: '59'},
    {value: '60', label: '60'}
  ],
};

const names = {
  2015: {
    lecturer: [
      {value: '1', label: 'l1'},
      {value: '2', label: '2'},
      {value: '3', label: '3'},
      {value: '4', label: '4'},
      {value: '5', label: '5'},
      {value: '6', label: '6'},
      {value: '7', label: '7'},
      {value: '8', label: '8'},
      {value: '9', label: '9'},
      {value: '10', label: '10'},
      {value: '11', label: '11'},
      {value: '12', label: '12'},
      {value: '13', label: '13'},
      {value: '14', label: '14'},
      {value: '15', label: '15'}
    ],
    theme: [
      {value: '16', label: 't16'},
      {value: '17', label: '17'},
      {value: '18', label: '18'},
      {value: '19', label: '19'},
      {value: '20', label: '20'},
      {value: '21', label: '21'},
      {value: '22', label: '22'},
      {value: '23', label: '23'},
      {value: '24', label: '24'},
      {value: '25', label: '25'},
      {value: '26', label: '26'},
      {value: '27', label: '27'},
      {value: '28', label: '28'},
      {value: '29', label: '29'},
      {value: '30', label: '30'}
    ],
    volunteer: [
      {value: '31', label: 'v31'},
      {value: '32', label: '32'},
      {value: '33', label: '33'},
      {value: '34', label: '34'},
      {value: '35', label: '35'},
      {value: '36', label: '36'},
      {value: '37', label: '37'},
      {value: '38', label: '38'},
      {value: '39', label: '39'},
      {value: '40', label: '40'},
      {value: '41', label: '41'},
      {value: '42', label: '42'},
      {value: '43', label: '43'},
      {value: '44', label: '44'},
      {value: '45', label: '45'}
    ]},
  2016: {
    lecturer: [
      {value: '1', label: 'l1'},
      {value: '2', label: '2'},
      {value: '3', label: '3'},
      {value: '4', label: '4'},
      {value: '5', label: '5'},
      {value: '6', label: '6'},
      {value: '7', label: '7'},
      {value: '8', label: '8'},
      {value: '9', label: '9'},
      {value: '10', label: '10'},
      {value: '11', label: '11'},
      {value: '12', label: '12'},
      {value: '13', label: '13'},
      {value: '14', label: '14'},
      {value: '15', label: '15'}
    ],
    theme: [
      {value: '16', label: 't16'},
      {value: '17', label: '17'},
      {value: '18', label: '18'},
      {value: '19', label: '19'},
      {value: '20', label: '20'},
      {value: '21', label: '21'},
      {value: '22', label: '22'},
      {value: '23', label: '23'},
      {value: '24', label: '24'},
      {value: '25', label: '25'},
      {value: '26', label: '26'},
      {value: '27', label: '27'},
      {value: '28', label: '28'},
      {value: '29', label: '29'},
      {value: '30', label: '30'}
    ],
    volunteer: [
      {value: '31', label: 'v31'},
      {value: '32', label: '32'},
      {value: '33', label: '33'},
      {value: '34', label: '34'},
      {value: '35', label: '35'},
      {value: '36', label: '36'},
      {value: '37', label: '37'},
      {value: '38', label: '38'},
      {value: '39', label: '39'},
      {value: '40', label: '40'},
      {value: '41', label: '41'},
      {value: '42', label: '42'},
      {value: '43', label: '43'},
      {value: '44', label: '44'},
      {value: '45', label: '45'}
    ]},
  2017: {
    lecturer: [
      {value: '1', label: 'l1'},
      {value: '2', label: '2'},
      {value: '3', label: '3'},
      {value: '4', label: '4'},
      {value: '5', label: '5'},
      {value: '6', label: '6'},
      {value: '7', label: '7'},
      {value: '8', label: '8'},
      {value: '9', label: '9'},
      {value: '10', label: '10'},
      {value: '11', label: '11'},
      {value: '12', label: '12'},
      {value: '13', label: '13'},
      {value: '14', label: '14'},
      {value: '15', label: '15'}
    ],
    theme: [
      {value: '16', label: 't16'},
      {value: '17', label: '17'},
      {value: '18', label: '18'},
      {value: '19', label: '19'},
      {value: '20', label: '20'},
      {value: '21', label: '21'},
      {value: '22', label: '22'},
      {value: '23', label: '23'},
      {value: '24', label: '24'},
      {value: '25', label: '25'},
      {value: '26', label: '26'},
      {value: '27', label: '27'},
      {value: '28', label: '28'},
      {value: '29', label: '29'},
      {value: '30', label: '30'}
    ],
    volunteer: [
      {value: '31', label: 'v31'},
      {value: '32', label: '32'},
      {value: '33', label: '33'},
      {value: '34', label: '34'},
      {value: '35', label: '35'},
      {value: '36', label: '36'},
      {value: '37', label: '37'},
      {value: '38', label: '38'},
      {value: '39', label: '39'},
      {value: '40', label: '40'},
      {value: '41', label: '41'},
      {value: '42', label: '42'},
      {value: '43', label: '43'},
      {value: '44', label: '44'},
      {value: '45', label: '45'}
    ]},
  2018: {
    lecturer: [
      {value: '1', label: 'l1'},
      {value: '2', label: '2'},
      {value: '3', label: '3'},
      {value: '4', label: '4'},
      {value: '5', label: '5'},
      {value: '6', label: '6'},
      {value: '7', label: '7'},
      {value: '8', label: '8'},
      {value: '9', label: '9'},
      {value: '10', label: '10'},
      {value: '11', label: '11'},
      {value: '12', label: '12'},
      {value: '13', label: '13'},
      {value: '14', label: '14'},
      {value: '15', label: '15'}
    ],
    theme: [
      {value: '16', label: 't16'},
      {value: '17', label: '17'},
      {value: '18', label: '18'},
      {value: '19', label: '19'},
      {value: '20', label: '20'},
      {value: '21', label: '21'},
      {value: '22', label: '22'},
      {value: '23', label: '23'},
      {value: '24', label: '24'},
      {value: '25', label: '25'},
      {value: '26', label: '26'},
      {value: '27', label: '27'},
      {value: '28', label: '28'},
      {value: '29', label: '29'},
      {value: '30', label: '30'}
    ],
    volunteer: [
      {value: '31', label: 'v31'},
      {value: '32', label: '32'},
      {value: '33', label: '33'},
      {value: '34', label: '34'},
      {value: '35', label: '35'},
      {value: '36', label: '36'},
      {value: '37', label: '37'},
      {value: '38', label: '38'},
      {value: '39', label: '39'},
      {value: '40', label: '40'},
      {value: '41', label: '41'},
      {value: '42', label: '42'},
      {value: '43', label: '43'},
      {value: '44', label: '44'},
      {value: '45', label: '45'}
    ]
  }
};

const texts = {
  volunteer: [
    {value: '31', label: '31'},
    {value: '32', label: '32'},
    {value: '33', label: '33'},
    {value: '34', label: '34'},
    {value: '35', label: '35'},
    {value: '36', label: '36'},
    {value: '37', label: '37'},
    {value: '38', label: '38'},
    {value: '39', label: '39'},
    {value: '40', label: '40'},
    {value: '41', label: '41'},
    {value: '42', label: '42'},
    {value: '43', label: '43'},
    {value: '44', label: '44'},
    {value: '45', label: '45'}
  ],
  action: [
    {value: '46', label: '46'},
    {value: '47', label: '47'},
    {value: '48', label: '48'},
    {value: '49', label: '49'},
    {value: '50', label: '50'},
    {value: '51', label: '51'},
    {value: '52', label: '52'},
    {value: '53', label: '53'},
    {value: '54', label: '54'},
    {value: '55', label: '55'},
    {value: '56', label: '56'},
    {value: '57', label: '57'},
    {value: '58', label: '58'},
    {value: '59', label: '59'},
    {value: '60', label: '60'}
  ],
};

const resources = [
  {value: '1', label: 'ноутбук'},
  {value: '2', label: 'афиша'},
  {value: '3', label: 'флешка'},
  {value: '4', label: 'кубик'},
  {value: '5', label: 'буклет'},
  {value: '6', label: 'видеокамера'},
  {value: '7', label: 'кликер'},
  {value: '8', label: 'проектор'},
  {value: '9', label: 'петличка'},
  {value: '10', label: 'рекордер'},
  {value: '11', label: 'яблоки'},
  {value: '12', label: 'вода'},
  {value: '13', label: 'фотоаппарат'},
  {value: '14', label: 'удлиннитель'},
  {value: '15', label: 'наклейки'}
];


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: '2015',
      type: 'lecturer',
      number: 1,
      name: 'DefaultName',
      resource: '',
      cost: '',
      text: '',
      physics: _.random(1, 4),
      biology: _.random(1, 4),
      presentation: _.random(1, 4),
      acting: _.random(1, 4),
      cards: [],
      posted: false,
    };

    this.customOptionChange = this.customOptionChange.bind(this);
    this.calcSkillsSum = this.calcSkillsSum.bind(this);

    this.raise_stat = this.raise_stat.bind(this);
    this.lower_stat = this.lower_stat.bind(this);

    this.postBuild = this.postBuild.bind(this);
  }


  componentDidMount() {
    this.updateList();
  }

  updateList() {
    axios.get('/list')
        .then(res => {
          console.log(res);
          const posts = _.reverse(res.data);
          console.log(posts);
          this.setState({ cards: posts });
        });
  }

  post_check() {}

  customOptionChange(event, key, unpack = true) {
    console.log(event);
    console.log(key, unpack ? event.target.value : event);
    let o = {};
    o[key] = unpack ? event.target.value : event;
    this.setState(o, () => this.post_check() );
  }

  stats_sum() {
    return this.state.physics + this.state.biology + this.state.presentation + this.state.acting;
  }

  calcSkillsSum() {
    return 15;
  }

  raise_stat(skill) {
    if (this.state[skill] < 9 && this.stats_sum() < this.calcSkillsSum() ) {
      let o = {};
      o[skill] = this.state[skill] + 1;
      this.setState(o)
    }
  }

  lower_stat(skill) {
    if (this.state[skill] > 1) {
      let o = {};
      o[skill] = this.state[skill] - 1;
      this.setState(o)
    }
  }


  postBuild() {
    let build = {
      year: this.state.year,
      type: this.state.type,
      number: this.state.number,
      name: this.state.type === 'action' ? this.state.name : this.state.name.label,
      resource: this.state.type === 'action' ? this.state.resource : this.state.resource.label,
      cost: this.state.cost,
      text: (this.state.type === 'volunteer' || this.state.type === 'action') ? this.state.text.label : this.state.text.label,
      physics: this.state.physics,
      biology: this.state.biology,
      presentation: this.state.presentation,
      acting: this.state.acting
    };

    axios.post('/add', build)
        .then(res => {
          console.log(res);
          this.setState({ posted: true});
          this.updateList();
        });

  }


  render() {
    const make_text = (stat, name) =>
        <div className="text">
          {name}
          <input type="text" name={stat} className="form-inline"
                 value={this.state[stat]}
                 onChange={(event) => {
                   let o = {};
                   o[stat] = event.target.value;
                   this.setState(o)
                 }}
          />
        </div>;

    const make_radio = (stat, key, text) =>
      <div className="radio">
        <label>
          <input type="radio" value={key}
                 checked={(() => { return this.state[stat] === key; })()}
                 onChange={(changeEvent) =>  { this.customOptionChange(changeEvent, stat); }} />
          {text}
        </label>
      </div>;

    const make_select = (stat, options) =>
        <div className={stat}>
          <Select
              name="form-field-name"
              value={this.state[stat]}
              onChange={(changeEvent) =>  { this.customOptionChange(changeEvent, stat, false); }}
              options={options}
          />
        </div>;

    const make_arrows = (stat, name) =>
        <div name = {stat}>
          {name}
          <button onClick={() => {this.lower_stat(stat)}}> {'<'} </button>
          <span className="font-weight-bold"> {this.state[stat]} </span>
          <button onClick={() => {this.raise_stat(stat)}}> {'>'} </button>
          {marks[this.state[stat]]}
        </div>;


    return (
      <div className="App">
        <div className="container theme-showcase" role="main">
          <h3 className="App-title">Build your Hero</h3>
          <div className="form">

            <h4 className="App-title">Select Year</h4>
            <div className="datablock">
              {make_radio("year", '2015', 2015)}
              {make_radio("year", '2016', 2016)}
              {make_radio("year", '2017', 2017)}
              {make_radio("year", '2018', 2018)}
            </div>

            <h4 className="App-title">Select Type</h4>
            <div className="datablock">
              {make_radio("type", "lecturer", "Lecturer")}
              {make_radio("type", "theme", "Theme")}
              {make_radio("type", "volunteer", "Volunteer")}
              {make_radio("type", "action", "Action")}
            </div>

            <h4 className="App-title">Select Number</h4>
            <div className="datablock">
              {make_select('bonus', numbers[this.state.type])}
            </div>

            <h4 className="App-title">Select Name</h4>
            <div className="datablock">
              {(this.state.type === 'lecturer' || this.state.type === 'theme' || this.state.type === 'volunteer')
                  ? make_select('name', names[this.state.year][this.state.type])
                  : make_text('name', 'Name')
              }
            </div>

            <h4 className="App-title">Select Resource</h4>
            <div className="datablock">
              {(this.state.type === 'action')
                  ? <div>tbd</div>
                  : make_select('resource', resources)
              }
            </div>

            {(this.state.type === 'lecturer' || this.state.type === 'theme')
                ? <div>
                    <h4 className="App-title">Select Stats</h4>
                    <div className="datablock">
                      {make_arrows("physics", "Physics")}
                      {make_arrows("biology", "Biology")}
                      {make_arrows("presentation", "Presentation")}
                      {make_arrows("acting", "Acting")}
                    </div>
                  </div>
                : <div>
                    <h4 className="App-title">Select Text</h4>
                    <div className="datablock">
                      {make_select('text', texts[this.state.type])}
                    </div>
                  </div>
            }

            <div>
              {this.state.posted ?
                  <button className="btn btn-info"> Posted! </button> :
                  <button className="btn btn-success" onClick={() => { this.postBuild(); }}> Post build! </button>}
            </div>
          </div>


          <div>
            <h4 className="App-title">Resent builds:</h4>
            <table className="table">
              <thead>
                <tr key='head'>
                  <td>Year</td>
                  <td>Type</td>
                  <td>Number</td>
                  <td>Name</td>
                  <td>Resource</td>
                  <td>Cost</td>
                  <td>Text</td>
                  <td>Physics</td>
                  <td>Biology</td>
                  <td>Presentation</td>
                  <td>Acting</td>
                </tr>
              </thead>
              <tbody>
                {this.state.cards.map((row) =>
                  <tr key={row._id} >
                    <td>{row.year}</td>
                    <td>{row.type}</td>
                    <td>{row.number}</td>
                    <td>{row.name}</td>
                    <td>{row.resource}</td>
                    <td>{row.cost}</td>
                    <td>
                      <img src="hand.png" width={32} height={24} title={row.text} alt="hower" />
                    </td>
                    <td>{row.physics}</td>
                    <td>{row.biology}</td>
                    <td>{row.presentation}</td>
                    <td>{row.acting}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
