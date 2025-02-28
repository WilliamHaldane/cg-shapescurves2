class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d', {willReadFrequently: true});
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let framebuffer = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(framebuffer);
                break;
            case 1:
                this.drawSlide1(framebuffer);
                break;
            case 2:
                this.drawSlide2(framebuffer);
                break;
            case 3:
                this.drawSlide3(framebuffer);
                break;
        }

        this.ctx.putImageData(framebuffer, 0, 0);
    }

    // framebuffer:  canvas ctx image data
    drawSlide0(framebuffer) {
        let bezier = { p0: {x: 200, y: 500}, p1: {x: 600, y: 400 }, p2: { x: 700, y: 200 }, p3: { x: 300, y: 100 }};
        let bezier1 = { p00: { x: 400, y: 300 }, p11: { x: 600, y: 600 }, p22: { x: 700, y: 400 }, p33: { x: 700, y: 100 }};

        this.drawBezierCurve(bezier.p0, bezier.p1, bezier.p2, bezier.p3, this.num_curve_sections, [0, 0, 180, 255], framebuffer);
        this.drawBezierCurve(bezier1.p00, bezier1.p11, bezier1.p22, bezier1.p33, this.num_curve_sections, [0, 0, 180, 255], framebuffer);

        // this.drawLine(bezier.p0, bezier.p3, [0, 0, 255, 255], framebuffer);
        // this.drawLine(bezier1.p00, bezier1.p33, [0, 0, 255, 255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide1(framebuffer) {
        var center = {x: 500, y: 500};
        var center2 = {x: 450, y: 450};
        var center3 = {x: 400, y: 400};
        var center4 = {x: 350, y: 350};
        var center5 = {x: 300, y: 300};
        var center6 = {x: 250, y: 250};
        var center7 = {x: 200, y: 200};
        var center8 = {x: 150, y: 150};
        var radius = 100;

        this.drawCircle(center, radius, 40, [0, 0, 255, 255], framebuffer);
        this.drawCircle(center2, radius, 40, [1, 200, 255, 255], framebuffer);
        this.drawCircle(center3, radius, 40, [1, 200, 95, 255], framebuffer);
        this.drawCircle(center4, radius, 40, [1, 0, 80, 255], framebuffer);
        this.drawCircle(center5, radius, 40, [1, 200, 255, 255], framebuffer);
        this.drawCircle(center6, radius, 40, [1, 25, 255, 255], framebuffer);
        this.drawCircle(center7, radius, 40, [1, 75, 150, 255], framebuffer);
        this.drawCircle(center8, radius, 40, [, 0, 255, 255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide2(framebuffer) {
        let polyVerts = [
            {x: 200, y: 200},
            {x: 100, y: 300},
            {x: 200, y: 400},
            {x: 500, y: 200},
            {x: 450, y: 350}
        ]

        let polyVerts1 = [
            {x: 500, y: 500},
            {x: 400, y: 300},
            {x: 600, y: 600},
            {x: 300, y: 500},
            {x: 450, y: 200}
        ]
       
        this.drawConvexPolygon(polyVerts, [0, 0, 255, 255], framebuffer);
        this.drawConvexPolygon(polyVerts1, [1, 200, 255, 255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide3(framebuffer) {
        let wVerts =  [
            {x: 100, y: 100},
            {x: 100, y: 400},
            {x: 125, y: 400},
            {x: 125, y: 125}
        ]

        let wVerts2 = [
            {x: 125, y: 135},
            {x: 175, y: 175},
            {x: 150, y: 125},
            {x: 100, y: 100}
        ]

        let wVerts3 = [
            {x: 175, y: 175},
            {x: 225, y: 135},
            {x: 225, y: 100},
            {x: 200, y: 125}
        ]

        let wVerts4 = [
            {x: 225, y: 400},
            {x: 250, y: 400},
            {x: 250, y: 100},
            {x: 225, y: 100}
        ]
        
        var center = {x: 300, y: 300};
        var radius = 25;

        var center1 = {x: 675, y: 110};
        var radius1 = 10;

        let p0 = {x: 275, y: 100};
        let p1 = {x: 275, y: 150};
        let p2 = {x: 325, y: 200};
        let p3 = {x: 325, y: 250};

        let p4 = {x: 275, y: 250};
        let p5 = {x: 275, y: 200};
        let p6 = {x: 325, y: 150};
        let p7 = {x: 325, y: 100};
        
        this.drawLine({x: 350, y: 100}, {x: 350, y: 400}, [1, 0, 80, 255], framebuffer);
        this.drawLine({x: 350, y: 100}, {x: 425, y: 100}, [1, 0, 80, 255], framebuffer);
        this.drawLine({x: 450, y: 100}, {x: 450, y: 400}, [1, 200, 95, 255], framebuffer);
        this.drawLine({x: 450, y: 100}, {x: 525, y: 100}, [1, 200, 95, 255], framebuffer);

        this.drawLine({x: 575, y: 100}, {x: 575, y: 400}, [1, 0, 80, 255], framebuffer);
        this.drawLine({x: 575, y: 250}, {x: 650, y: 250}, [1, 0, 80, 255], framebuffer);
        this.drawLine({x: 650, y: 100}, {x: 650, y: 400}, [1, 0, 80, 255], framebuffer);

        this.drawBezierCurve(p0, p1, p2, p3, this.num_curve_sections, [1, 200, 255, 255], framebuffer);
        this.drawBezierCurve(p4, p5, p6, p7, this.num_curve_sections, [1, 200, 255, 255], framebuffer);

        this.drawCircle(center, radius, 40, [1, 0, 80, 255], framebuffer);
        this.drawCircle(center1, radius1, 40, [1, 0, 80, 255], framebuffer);

        this.drawConvexPolygon(wVerts, [1, 200, 255, 255], framebuffer);
        this.drawConvexPolygon(wVerts2, [1, 200, 255, 255], framebuffer);
        this.drawConvexPolygon(wVerts3, [1, 200, 255, 255], framebuffer);
        this.drawConvexPolygon(wVerts4, [1, 200, 255, 255], framebuffer);
    }

    drawBezierCurve(p0, p1, p2, p3, num_edges, color, framebuffer) {
        let iteration = 1 / num_edges;
        let start = p0;

        for (let i = 0; i <= num_edges; i++) {
            let t = i * iteration;
            var x = Math.pow(1 - t, 3) * p0.x + 3 * Math.pow(1 - t, 2) * t * p1.x + 3 * (1 - t) * Math.pow(t, 2) * p2.x + Math.pow(t, 3) * p3.x;
            var y = Math.pow(1 - t, 3) * p0.y + 3 * Math.pow(1 - t, 2) * t * p1.y + 3 * (1 - t) * Math.pow(t, 2) * p2.y + Math.pow(t, 3) * p3.y;

            let curPos = {x: Math.round(x), y: Math.round(y)};
            this.drawLine(start, curPos, [1, 200, 95, 255], framebuffer);
            if (this.show_points) {
                this.drawVertex(curPos, [1, 200, 95, 255], framebuffer);
                this.drawVertex(start, [1, 200, 95, 255], framebuffer);
            }
            start = curPos;
        }
    }

    drawCircle(center, radius, num_edges, color, framebuffer) {
        var nextAngle = 2 * Math.PI / num_edges;
        var startAngle = 0;
        var previousPoint = {x: center.x + radius * Math.cos(0), y: center.y + radius * Math.sin(0)};
        for (let i = 0; i <= num_edges; i++) {
            startAngle = i * nextAngle;
            var x = center.x + radius * Math.cos(startAngle);
            var y = center.y + radius * Math.sin(startAngle);
            var currentPos = {x: Math.round(x), y: Math.round(y)};
            this.drawLine(previousPoint, currentPos, color, framebuffer);

            if (this.show_points) {
                this.drawVertex(previousPoint, [1, 0, 80, 255], framebuffer);
                this.drawVertex(center, color, framebuffer);
            }
            previousPoint = currentPos;
        }
    }
    
    drawConvexPolygon(vertex_list, color, framebuffer) {
        let startVertex = vertex_list[0];
        let currentVertex = 0;
        let nextVertex = 0;

        for (let i = 0; i < vertex_list.length - 1; i++) {
            currentVertex = vertex_list[i];
            nextVertex = vertex_list[i+1];
            this.drawTriangle(startVertex, currentVertex, nextVertex, color, framebuffer);

            if (this.show_points) {
                this.drawVertex(vertex_list[i], color, framebuffer);
            }
        }
    }
    
    drawVertex(v, color, framebuffer) {
        let size = 3;
    
        this.drawLine({ x: v.x - size, y: v.y - size}, { x: v.x + size, y: v.y + size }, color, framebuffer);
        this.drawLine({ x: v.x + size, y: v.y - size}, { x: v.x - size, y: v.y + size }, color, framebuffer);
    }    
    
    
    /***************************************************************
     ***       Basic Line and Triangle Drawing Routines          ***
     ***       (code provided from in-class activities)          ***
     ***************************************************************/
    pixelIndex(x, y, framebuffer) {
	    return 4 * y * framebuffer.width + 4 * x;
    }
    
    setFramebufferColor(color, x, y, framebuffer) {
	    let p_idx = this.pixelIndex(x, y, framebuffer);
        for (let i = 0; i < 4; i++) {
            framebuffer.data[p_idx + i] = color[i];
        }
    }
    
    swapPoints(a, b) {
        let tmp = {x: a.x, y: a.y};
        a.x = b.x;
        a.y = b.y;
        b.x = tmp.x;
        b.y = tmp.y;
    }

    drawLine(p0, p1, color, framebuffer) {
        if (Math.abs(p1.y - p0.y) <= Math.abs(p1.x - p0.x)) { // |m| <= 1
            if (p0.x < p1.x) {
                this.drawLineLow(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineLow(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }

        }
        else {                                                // |m| > 1
            if (p0.y < p1.y) {
                this.drawLineHigh(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineHigh(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
    }
    
    drawLineLow(x0, y0, x1, y1, color, framebuffer) {
        let A = y1 - y0;
        let B = x0 - x1;
        let iy = 1; // y increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            iy = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let y = y0;
        for (let x = x0; x <= x1; x++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                y += iy;
            }
        }
    }
    
    drawLineHigh(x0, y0, x1, y1, color, framebuffer) {
        let A = x1 - x0;
        let B = y0 - y1;
        let ix = 1; // x increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            ix = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let x = x0;
        for (let y = y0; y <= y1; y++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                x += ix;
            }
        }
    }
    
    drawTriangle(p0, p1, p2, color, framebuffer) {
        // Deep copy, then sort points in ascending y order
        p0 = {x: p0.x, y: p0.y};
        p1 = {x: p1.x, y: p1.y};
        p2 = {x: p2.x, y: p2.y};
        if (p1.y < p0.y) this.swapPoints(p0, p1);
        if (p2.y < p0.y) this.swapPoints(p0, p2);
        if (p2.y < p1.y) this.swapPoints(p1, p2);
        
        // Edge coherence triangle algorithm
        // Create initial edge table
        let edge_table = [
            {x: p0.x, inv_slope: (p1.x - p0.x) / (p1.y - p0.y)}, // edge01
            {x: p0.x, inv_slope: (p2.x - p0.x) / (p2.y - p0.y)}, // edge02
            {x: p1.x, inv_slope: (p2.x - p1.x) / (p2.y - p1.y)}  // edge12
        ];
        
        // Do cross product to determine if pt1 is to the right/left of edge02
        let v01 = {x: p1.x - p0.x, y: p1.y - p0.y};
        let v02 = {x: p2.x - p0.x, y: p2.y - p0.y};
        let p1_right = ((v01.x * v02.y) - (v01.y * v02.x)) >= 0;
        
        // Get the left and right edges from the edge table (lower half of triangle)
        let left_edge, right_edge;
        if (p1_right) {
            left_edge = edge_table[1];
            right_edge = edge_table[0];
        }
        else {
            left_edge = edge_table[0];
            right_edge = edge_table[1];
        }
        // Draw horizontal lines (lower half of triangle)
        for (let y = p0.y; y < p1.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) { 
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
        
        // Get the left and right edges from the edge table (upper half of triangle) - note only one edge changes
        if (p1_right) {
            right_edge = edge_table[2];
        }
        else {
            left_edge = edge_table[2];
        }
        // Draw horizontal lines (upper half of triangle)
        for (let y = p1.y; y < p2.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) {
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
    }
};

export { Renderer };
