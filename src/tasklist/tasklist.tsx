import Box from '@mui/joy/Box';
import {Sheet, Table, ThemeProvider} from "@mui/joy";
import {createTheme} from '@mui/system';

const theme = createTheme({
    palette: {
        sheetBackground: '#0E1215',
    },
});


export function Tasklist() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <h1>Tasklist</h1>
                <Box sx={{p: 2, border: '1px dashed orange'}}>
                    <Sheet
                        variant="solid"
                        color="sheetBackground"
                        invertedColors
                        sx={{
                            pt: 1,
                            borderRadius: 'sm',
                            transition: '0.3s',
                            background: `linear-gradient(45deg, 'red', 'green')`,
                            '& tr:last-child': {
                                '& td:first-child': {
                                    borderBottomLeftRadius: '8px',
                                },
                                '& td:last-child': {
                                    borderBottomRightRadius: '8px',
                                },
                            },
                        }}
                    >
                        <Table
                            borderAxis="yBetween"
                            size="md"
                            stickyFooter={false}
                            stickyHeader
                            stripe={'odd'}
                            hoverRow
                        >
                            <thead>
                            <tr>
                                <th style={{width: '40%'}}>Dessert (100g serving)</th>
                                <th>Calories</th>
                                <th>Fat&nbsp;(g)</th>
                                <th>Carbs&nbsp;(g)</th>
                                <th>Protein&nbsp;(g)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Frozen yoghurt</td>
                                <td>159</td>
                                <td>6</td>
                                <td>24</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Ice cream sandwich</td>
                                <td>237</td>
                                <td>9</td>
                                <td>37</td>
                                <td>4.3</td>
                            </tr>
                            <tr>
                                <td>Eclair</td>
                                <td>262</td>
                                <td>16</td>
                                <td>24</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>Cupcake</td>
                                <td>305</td>
                                <td>3.7</td>
                                <td>67</td>
                                <td>4.3</td>
                            </tr>
                            <tr>
                                <td>Gingerbread</td>
                                <td>356</td>
                                <td>16</td>
                                <td>49</td>
                                <td>3.9</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Sheet>
                </Box>
            </ThemeProvider>
        </div>
    );
}
