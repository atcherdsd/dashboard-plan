import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductList from './product-list';
import AddProduct from './add-product'
import EditProduct from './edit-product'
import Categories from './categories';
import Collections from './collections';
import Combo from './combo';

const Catalog = props => {
  const { match } = props
	return (
		<Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/product-list`} />
			<Route path={`${match.url}/product-list`} component={ProductList} />
			<Route path={`${match.url}/add-product`} component={AddProduct} />
			<Route path={`${match.url}/edit-product/:id`} component={EditProduct} />
			<Route path={`${match.url}/categories`} component={Categories} />
			<Route path={`${match.url}/collections`} component={Collections} />
			<Route path={`${match.url}/combo`} component={Combo} />
		</Switch>
	)
}

export default Catalog

