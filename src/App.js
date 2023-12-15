import './App.css';
import React from 'react';
import img1 from './img/815O9ktyfUL.png'
import { MainPage } from './pages/mainPage/mainPage';
import { CatalogPage } from './pages/catalogPage/catalogPage';
import { ItemPage } from './pages/itemPage/itemPage';
import { GoodsPage } from './pages/goodsPage/goodsPage';


export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: "Our coffee",
      filter: "all",
      term: "",
      data: [{
        img: img1,
        name: "Solimo Coffee Beans 2 kg",
        country: "Brazil",
        price: "10.73$",
        id: 1
      },{
        img: img1,
        name: "Solimo Coffee Beans 2 kg",
        country: "Brazil",
        price: "10.73$",
        id: 2
      },{
        img: img1,
        name: "Ukraine Coffee Beans 2 kg",
        country: "Brazil",
        price: "10.73$",
        id: 3
      },{
        img: img1,
        name: "Solimo Coffee Beans 2 kg",
        country: "Kenya",
        price: "10.73$",
        id: 4
      },{
        img: img1,
        name: "Bombino Coffee Beans 2 kg",
        country: "Kenya",
        price: "10.73$",
        id: 5
      },{
        img: img1,
        name: "Solimo Coffee Beans 2 kg",
        country: "Columbia",
        price: "10.73$",
        id: 6
      },{
        img: img1,
        name: "Solimo Coffee Beans 2 kg",
        country: "Kenya",
        price: "10.73$",
        id: 7
      }]
    }
  }

filterPost = (items, filter) => {
    switch (filter) {
        case 'Brazil':
            return items.filter(item => item.country === "Brazil")
        case 'Kenya': 
            return items.filter(item => item.country === 'Kenya')
        case 'Columbia': 
            return items.filter(item => item.country === 'Columbia')
        default:
            return items    
    }
}

onChangePage = (visibleData) => {
  // eslint-disable-next-line default-case
  switch(this.state.page) {
    case "Coffee house":
      return <MainPage data={this.state.data} clickswapPage={this.clickswapPage} />
    case "Our coffee":
      return <CatalogPage onUpdateSearch={this.onUpdateSearch} onFilterSelect={this.onFilterSelect} data={visibleData} clickswapPage={this.clickswapPage}/>
    case "coffe":
      return <ItemPage data={this.state.data} clickswapPage={this.clickswapPage}/>
    case "For your pleasure":
      return <GoodsPage data={this.state.data} clickswapPage={this.clickswapPage}/>
  }
}
onFilterSelect = (filter) => {
  this.setState({filter})
}

clickswapPage = (e) => {
  if(e.target.getAttribute("alt") === "coffe") {
    this.setState(() => ({
      page: e.target.getAttribute("alt")
    }))
  } else {
  this.setState(() => ({
    page: e.target.innerText
  }))
  }
  }
  searchEmp = (items, term) => {
    if(term.length === 0) {
        return items;
    }

    return items.filter(item => {
        return item.name.indexOf(term) > -1
    })
  }
  onUpdateSearch = (e) => {
    let term = e.target.value
    this.setState({term})
  }
  render() {
    const visibleData = this.filterPost(this.searchEmp(this.state.data,this.state.term), this.state.filter)
    return (
      <>
      {this.onChangePage(visibleData)}
      </>
    );
  }
}

export default App;
