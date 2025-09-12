import { FaSun, FaMoon } from 'react-icons/fa';
import { ToggleButton } from './styles';

const ThemeToggle = ({ isDark, onToggle }) => {
    return (
        <ToggleButton onClick={onToggle} title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            {isDark ? <FaSun /> : <FaMoon />}
        </ToggleButton>
    );
};

export default ThemeToggle;
