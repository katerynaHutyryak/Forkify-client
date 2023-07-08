import { createAuth0Client } from '@auth0/auth0-spa-js'
import * as model from './model.js'
import { MODAL_CLOSE_SEC } from './config.js'
import recipeView from './views/recipeView.js'
import searchView from './views/searchView.js'
import resultsView from './views/resultsView.js'
import paginationView from './views/paginationView.js'
import bookmarksView from './views/bookmarksView.js'
import addRecipeView from './views/addRecipeView.js'
import authView from './views/authView'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

let auth0Client = null

window.onload = async () => {
    auth0Client = await createAuth0Client({
        domain: 'dev-5hwndgvebevysof6.eu.auth0.com',
        clientId: 'Ks6wUNCpcoNJzejw9JC5yNupXMK183Qm',
        authorizationParams: {
            audience: 'https://forkify-fvelk.ondigitalocean.app/api/v1',
        },
    })

    const isAuthenticated = await auth0Client.isAuthenticated()
    if (isAuthenticated) {
        return authView.render(isAuthenticated)
    }

    const query = window.location.search
    if (query.includes('code=') && query.includes('state=')) {
        // Process the login state
        await auth0Client.handleRedirectCallback()

        const isAuthenticated = await auth0Client.isAuthenticated()

        authView.render(isAuthenticated)

        // Use replaceState to redirect the user away and remove the querystring parameters
        window.history.replaceState({}, document.title, '/')
    }
}

const controlRecipes = async function () {
    try {
        const id = window.location.hash.slice(1)

        if (!id) return
        recipeView.renderSpinner()

        resultsView.update(model.getSearchResultsPage())

        bookmarksView.update(model.state.bookmarks)

        await model.loadRecipe(id)

        recipeView.render(model.state.recipe)
    } catch (err) {
        recipeView.renderError()
        console.error(err)
    }
}

const controlSearchResults = async function () {
    try {
        resultsView.renderSpinner()

        const query = searchView.getQuery()
        if (!query) return

        await model.loadSearchResults(query)

        resultsView.render(model.getSearchResultsPage())

        paginationView.render(model.state.search)
    } catch (err) {
        console.log(err)
    }
}

const controlPagination = function (goToPage) {
    resultsView.render(model.getSearchResultsPage(goToPage))

    paginationView.render(model.state.search)
}

const controlServings = function (newServings) {
    model.updateServings(newServings)

    recipeView.update(model.state.recipe)
}

const controlAddBookmark = function () {
    if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe)
    else model.deleteBookmark(model.state.recipe.id)

    recipeView.update(model.state.recipe)

    bookmarksView.render(model.state.bookmarks)
}

const controlBookmarks = function () {
    bookmarksView.render(model.state.bookmarks)
}

const controlAddRecipe = async function (newRecipe) {
    try {
        addRecipeView.renderSpinner()

        await model.uploadRecipe(auth0Client, newRecipe)
        console.log(model.state.recipe)

        recipeView.render(model.state.recipe)

        addRecipeView.renderMessage()

        bookmarksView.render(model.state.bookmarks)

        window.history.pushState(null, '', `#${model.state.recipe.id}`)

        setTimeout(function () {
            addRecipeView.toggleWindow()
        }, MODAL_CLOSE_SEC * 1000)
    } catch (err) {
        console.error('💥', err)
        addRecipeView.renderError(err.message)
    }
}

const controllLogin = async () => {
    await auth0Client.loginWithRedirect({
        authorizationParams: {
            redirect_uri: window.location.origin,
        },
    })
}

const controllLogout = () => {
    auth0Client.logout({
        logoutParams: {
            returnTo: window.location.origin,
        },
    })
}

const init = async function () {
    bookmarksView.addHandlerRender(controlBookmarks)
    recipeView.addHandlerRender(controlRecipes)
    recipeView.addHandlerUpdateServings(controlServings)
    recipeView.addHandlerAddBookmark(controlAddBookmark)
    searchView.addHandlerSearch(controlSearchResults)
    paginationView.addHandlerClick(controlPagination)
    addRecipeView.addHandlerUpload(controlAddRecipe)
    authView.addHandlerLogin(controllLogin)
    authView.addHandlerLogout(controllLogout)
}
init()
