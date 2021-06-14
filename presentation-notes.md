# Presentation Notes

## Possible Figures

### Libraries

- p5 + [DOM](https://p5js.org/reference/#group-DOM) for Math
- [revealjs animate plugin](https://github.com/rajgoel/reveal.js-plugins/tree/master/animate) Requires an SVG

### Constraints

- Infinite thin string
- Tension in x-axis
- Transverse Motion constraint


### Visualisations

- String to small section of string (plotly, bokeh, chart or p5)
- Illustration of phase velocity
- Illustration of group velocity
- Mode Visualisation
- Finite Difference String
- 'angular wave number' (number of equal phase locations per meter)


### Equations

\frac{d}{dx}\left(\frac{\partial y}{\partial x}\bigg\vert_{x_1 + dx} - \frac{\partial y}{\partial x}\bigg\vert_{x_1}\right) \Rightarrow
\frac{\frac{\partial y}{\partial x}\bigg\vert_{x_1 + dx} - \frac{\partial y}{\partial x}\bigg\vert_{x_1}}{dx} \Rightarrow
\lim\limits_{dx \to 0} \frac{\frac{\partial y(x_1 + dx)}{\partial x} - \frac{\partial y(x_1)}{\partial x}}{dx} \Rightarrow
\frac{d}{dx}\frac{\partial y(x_1)}{\partial x} \Rightarrow \frac{\partial^2 y(x_1)}{\partial x^2}


\frac{\frac{\partial y}{\partial x}\bigg\vert_{x_1 + \Delta_x} - \frac{\partial y}{\partial x}\bigg\vert_{x_1}}{\Delta_x} \Rightarrow
\lim\limits_{\Delta_x \to 0} \frac{\frac{\partial y(x_1 + \Delta_x)}{\partial x} - \frac{\partial y(x_1)}{\partial x}}{\Delta_x} \Rightarrow
\frac{d}{dx}\frac{\partial y(x_1)}{\partial x} \Rightarrow \frac{\partial^2 y(x_1)}{\partial x^2} \\
