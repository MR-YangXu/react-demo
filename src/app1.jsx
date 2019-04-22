import React, { Component } from 'react'

export default class App extends Component {

    state ={
        repoName: '',
        repoUrl: ''
    }

    componentDidMount () {
        // 使用axios发送异步的ajax请求
        const url = `https://api.github.com/search2/repositories?q=r&sort=stars`
        // axios.get(url)
        //     .then(response => {
        //         const result = response.data
        //         // console.log(response)
        //         const {name, html_url} = result.items[0]
        //         // 更新状态
        //         this.setState({repoName: name, repoUrl: html_url})
        //     })
        //     .catch(error => {
        //         console.log(error.message)
        //     })

        // 使用fetch发送异步的ajax请求
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                const {name, html_url} = data.items[0]
                // 更新状态
                this.setState({repoName: name, repoUrl: html_url})
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    render() {
        const {repoName, repoUrl} = this.state
        if (!repoName) {
            return <h2>LOADING...</h2>
        } else {
            return <h2>Most star repo is <a href={repoUrl}>{repoName}</a></h2>
        }
    }
}
