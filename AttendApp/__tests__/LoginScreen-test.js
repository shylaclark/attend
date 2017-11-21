import { RaisedButton } from 'material-ui';



const handleSubmit = jest.fn();
const elementOptions = {
    Field: {
        selector: Field,
        staticProps: { component: MyTextField },
    },
    SubmitButton: {
        selector: RaisedButton,
        staticProps: { label: 'Submit', onTouchTap: handleSubmit },
    }
};

test('with defaultProps', () => {
    const tree = renderer.shallowCreate(
        <LoginScreen handlerSubmit={jest.fn()} />
).toJSON();
expect(tree).toMatchSnapshot();
});

test('when submitting', () => {
    const tree = renderer.shallowCreate(
        <LoginScreen handlerSubmit={jest.fn()} submitting />
).toJSON();
expect(tree).toMatchSnapshot();
});

const renderModes = [{
    desc: 'with default props',
    props: { handleSubmit },
    elementsWithProps: {
        Field: [{
            floatingLabelText: 'Username',
            name: 'username',
        }, {
            floatingLabelText: 'Password',
            name: 'password',
            type: 'password',
        }],
        SubmitButton: [{  }], // Indicated one element with default props
    },
}, {
    desc: 'when submitting',
    props: { handlerSubmit, submitting },
    elementsWithProps: {
        SubmitButton: [{ disabled: true  }],
    },
}]

describe('ImageRenderer(props): ElementsTree', () => {
    const testRenderMode = ({ desc, props, elementsWithProps }) => describe(desc, () => {
    const wrapper = shallow(<ImageRenderer {...defaultProps} {...props} />);

const testElementsByOptions = ({ selector, staticProps }, componentName) => {
    const expectedElements = elementsWithProps[componentName] || [];
    const selectedElements = wrapper.find(selector);

    it(`should render ${expectedElements.length} entities of ${componentName}`, () => {
        expect(selectedElements.length).toBe(expectedElements.length);
});

    const testExpectedElement = (expectedProps, elementIndex) =>
    describe(`${elementIndex + 1}th element of ${componentName}`, () => {
        const expectedElementProps = { ...staticProps, ...expectedProps };
    const elementProps = selectedElements.at(elementIndex).props();

    testExpectedProps(elementProps, expectedElementProps);
});

    _.forEach(expectedElements, testExpectedElement);
};

_.forEach(elementOptions, testElementsByOptions);
});

_.forEach(renderModes, testRenderMode);
});
