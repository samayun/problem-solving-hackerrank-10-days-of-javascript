
function main() {
    const PI = Math.PI;
    // Print the area of the circle:
    let r = parseFloat(readLine());
    // Print the perimeter of the circle:
    let area = PI * Math.pow(r, 2)
    console.log(area);

    let perimeter = 2 * PI * r;
    console.log(perimeter);
}