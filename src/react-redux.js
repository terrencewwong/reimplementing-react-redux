import React from "react";

const contextComponents = React.createContext({});

export const connect = (mapStateToProps) => {
    return (Component) => {
        return class ConnectedComponent extends React.Component {
            static displayName = `ConnectedComponent(${Component.displayName})`


            render () {
                return (
                    <contextComponents.Consumer>
                        {state => {
                            const props = {
                                ...this.props,
                                ...mapStateToProps(state, this.props)
                            }

                            return <Component {...props} />
                        }}
                    </contextComponents.Consumer>
                )
            }
        }
    }
}

export const Provider = ({state, children}) => (
    <contextComponents.Provider value={state}>
        {children}
    </contextComponents.Provider>
)
