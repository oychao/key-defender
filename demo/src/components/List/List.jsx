import React from 'react';
import produce from 'immer';
import { hot } from 'react-hot-loader';

import Item from '../Item';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editVal: '',
      list: [{
        title: 'vocta@ci.ae'
      }, {
        title: 'cogajvaw@pipisfa.so'
      }, {
        title: 'ujlip@solzew.gl'
      }, {
        title: 'ravawpo@huwajkop.gy'
      }, {
        title: 'ra@ad.sj'
      }]
    };

    this.handleEditValChange = this.handleEditValChange.bind(this);
    this.handleAppendItem = this.handleAppendItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleEditValChange(e) {
    this.setState({
      editVal: e.target.value
    });
  }

  handleAppendItem(e) {
    if (e.key === 'Enter') {
      const { editVal, list } = this.state;
      this.setState({
        editVal: '',
        list: produce(list, (draft) => {
          draft.push({
            title: editVal
          });
        })
      });
    }
  }

  handleRemoveItem(idx) {
    const { list } = this.state;
    this.setState({
      list: produce(list, (draft) => {
        draft.splice(idx, 1);
      })
    });
  }

  render() {
    const { editVal, list } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            value={editVal}
            onChange={this.handleEditValChange}
            onKeyDown={this.handleAppendItem}
          />
        </div>
        <ul>
          {list.map((item, idx) => (
            <Item.view
              key={idx}
              title={item.title}
              remove={() => this.handleRemoveItem(idx)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default hot(module)(List);
